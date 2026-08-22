import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void
}

function readRoute(): string {
  return window.location.hash.replace(/^#/, '')
}

export function useHashRoute(): string {
  const [route, setRoute] = useState(readRoute)

  useEffect(() => {
    function onHashChange() {
      const next = readRoute()
      const doc = document as ViewTransitionDocument
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (!reduced && typeof doc.startViewTransition === 'function') {
        doc.startViewTransition(() => flushSync(() => setRoute(next)))
      } else {
        setRoute(next)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}
