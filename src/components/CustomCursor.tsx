import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    if (!window.matchMedia('(pointer: fine)').matches) {
      dot.style.display = 'none'
      ring.style.display = 'none'
      return
    }

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let raf: number

    function onMouseMove(e: MouseEvent) {
      mx = e.clientX
      my = e.clientY
      if (dot) {
        dot.style.left = `${mx}px`
        dot.style.top = `${my}px`
      }
    }

    function loop() {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      if (ring) {
        ring.style.left = `${rx}px`
        ring.style.top = `${ry}px`
      }
      raf = requestAnimationFrame(loop)
    }

    function onOver(e: MouseEvent) {
      if ((e.target as HTMLElement).closest('a, button')) ring?.classList.add('big')
    }
    function onOut(e: MouseEvent) {
      if ((e.target as HTMLElement).closest('a, button')) ring?.classList.remove('big')
    }
    function onLeave() {
      if (!dot || !ring) return
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }
    function onEnter() {
      if (!dot || !ring) return
      dot.style.opacity = '1'
      ring.style.opacity = '0.45'
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true"></div>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true"></div>
    </>
  )
}
