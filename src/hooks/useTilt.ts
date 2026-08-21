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
    el.style.setProperty('--tilt-x', x.toFixed(3))
    el.style.setProperty('--tilt-y', y.toFixed(3))
  }

  function onMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
    el.style.setProperty('--tilt-x', '0')
    el.style.setProperty('--tilt-y', '0')
  }

  return { ref, onMouseMove, onMouseLeave }
}
