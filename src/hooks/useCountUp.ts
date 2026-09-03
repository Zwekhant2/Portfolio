import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function useCountUp(target: number, active: boolean, duration = 1200) {
  // Everything else on the page honours this; a number ticking up is motion
  // too, so land on the final value instead of animating to it.
  const reduced = prefersReducedMotion()
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!active || reduced || started.current) return
    started.current = true
    const start = performance.now()
    let frame = 0

    function step(now: number) {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(ease * target))
      if (p < 1) frame = requestAnimationFrame(step)
      else setValue(target)
    }
    frame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(frame)
  }, [active, target, duration, reduced])

  return reduced ? target : value
}
