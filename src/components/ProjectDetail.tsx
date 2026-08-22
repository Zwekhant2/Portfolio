import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { illustrationMap } from './illustrations'
import { useViewTransitionName } from '../hooks/useViewTransitionName'
import { formatMonthYear, useGitHubStats } from '../hooks/useGitHubStats'

export function ProjectDetail({ project }: { project: Project }) {
  const Illustration = illustrationMap[project.illustration]
  const previewRef = useViewTransitionName<HTMLDivElement>(`card-preview-${project.id}`)
  const titleRef = useViewTransitionName<HTMLHeadingElement>(`card-title-${project.id}`)
  const ghStats = useGitHubStats(project.linkHref)

  const others = projects.filter((p) => p.id !== project.id)

  return (
    <div className="wrap case-study">
      <a className="case-study-back" href="#work">
        ← Back to work
      </a>

      <div ref={previewRef} className="case-study-preview card-preview" data-color={project.color}>
        <span className="preview-num">{project.number}</span>
        <div className="card-illustration">
          <Illustration />
        </div>
        <div className="preview-chips">
          {project.chips.map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="case-study-body">
        <div className="case-study-meta">
          <span className="card-num">
            {project.number} · {project.year}
          </span>
          <span className="meta-badge">{project.badge}</span>
          <span className="card-tag-sub">{project.badgeSub}</span>
          {ghStats && (
            <span className="gh-stat">
              <span className="gh-stat-star">★</span> {ghStats.stars} · {formatMonthYear(ghStats.updatedAt)}
            </span>
          )}
        </div>

        <h1 ref={titleRef} className="case-study-title">
          {project.title}
        </h1>

        <p className="case-study-desc">{project.description}</p>

        <a className="pill pill-solid" href={project.linkHref} target="_blank" rel="noopener">
          {project.linkLabel}
        </a>

        <div className="case-study-others">
          <span className="case-study-others-label">More work</span>
          <div className="case-study-others-list">
            {others.map((p) => (
              <a key={p.id} className="case-study-other-link" href={`#/work/${p.id}`}>
                {p.title} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
