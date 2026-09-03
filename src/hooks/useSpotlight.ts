import { useCallback, useRef } from 'react'

/**
 * Tracks the pointer inside an element and writes it to --mx/--my, which the
 * .spotlight class reads. Values are written straight to the style attribute
 * rather than held in state — this fires on every mousemove, and re-rendering
 * at that rate would be wasteful.
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  const onMouseMove = useCallback((event: React.MouseEvent<T>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }, [])

  return { ref, onMouseMove }
}
