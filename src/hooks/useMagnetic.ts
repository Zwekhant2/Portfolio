import { useRef, type MouseEvent } from 'react'

export function useMagnetic<T extends HTMLElement>(strength = 0.28) {
  const ref = useRef<T | null>(null)

  function onMouseMove(e: MouseEvent<T>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) * strength
    const dy = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  function onMouseLeave() {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  return { ref, onMouseMove, onMouseLeave }
}
