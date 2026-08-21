import { useEffect, useState } from 'react'

export interface GitHubStats {
  stars: number
  updatedAt: string
}

const cache = new Map<string, GitHubStats | null>()

function parseRepo(url: string): string | null {
  const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/)
  return match ? `${match[1]}/${match[2]}` : null
}

export function formatMonthYear(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export function useGitHubStats(repoUrl: string): GitHubStats | null {
  const [stats, setStats] = useState<GitHubStats | null>(cache.get(repoUrl) ?? null)

  useEffect(() => {
    const repo = parseRepo(repoUrl)
    if (!repo) return
    if (cache.has(repoUrl)) {
      setStats(cache.get(repoUrl) ?? null)
      return
    }

    let cancelled = false
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled) return
        const result: GitHubStats | null = data
          ? { stars: data.stargazers_count, updatedAt: data.pushed_at }
          : null
        cache.set(repoUrl, result)
        setStats(result)
      })
      .catch(() => {
        cache.set(repoUrl, null)
      })

    return () => {
      cancelled = true
    }
  }, [repoUrl])

  return stats
}
