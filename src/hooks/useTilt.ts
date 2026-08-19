import { useRef, type MouseEvent } from 'react'

export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  function onMouseMove(e: MouseEvent<T>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(1400px) rotateY(${x * 5}deg) rotateX(${-y * 3.5}deg)`
  }

  function onMouseLeave() {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  return { ref, onMouseMove, onMouseLeave }
}
