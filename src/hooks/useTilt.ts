import { useRef, type MouseEvent } from 'react'

interface TiltOptions {
  /** Max rotateY in degrees at the pointer's horizontal edge; rotateX scales at 0.7x this. */
  maxRotate?: number
  /** Extra translateZ (px) to lift the element toward the viewer while tilting. */
  liftZ?: number
  /** Static transform (e.g. a centering translateY) to keep applied underneath the tilt. */
  baseTransform?: string
}

export function useTilt<T extends HTMLElement>(options: TiltOptions = {}) {
  const { maxRotate = 5, liftZ = 0, baseTransform = '' } = options
  const ref = useRef<T | null>(null)

  function onMouseMove(e: MouseEvent<T>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    const lift = liftZ ? ` translateZ(${liftZ}px)` : ''
    el.style.transform = `perspective(1400px)${baseTransform} rotateY(${x * maxRotate}deg) rotateX(${-y * maxRotate * 0.7}deg)${lift}`
    el.style.setProperty('--tilt-x', x.toFixed(3))
    el.style.setProperty('--tilt-y', y.toFixed(3))
  }

  function onMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = baseTransform
    el.style.setProperty('--tilt-x', '0')
    el.style.setProperty('--tilt-y', '0')
  }

  return { ref, onMouseMove, onMouseLeave }
}
