import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { Theme } from '../hooks/useTheme'

const ACCENT_BY_THEME: Record<Theme, number> = {
  light: 0x002fa7,
  dark: 0x5b84ff,
}

const PARTICLE_COUNT = 260

export function HeroCanvas({ theme }: { theme: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const materialRef = useRef<THREE.PointsMaterial | null>(null)

  // Recolor in place on theme change rather than tearing down the scene —
  // the particle field itself doesn't need to change, just its color.
  useEffect(() => {
    materialRef.current?.color.setHex(ACCENT_BY_THEME[theme])
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !canvas.parentElement) return
    const container = canvas.parentElement as HTMLElement

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 22

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))

    const positions = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 34
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: ACCENT_BY_THEME[theme],
      size: 0.09,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.55,
    })
    materialRef.current = material

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    function resize() {
      const { width, height } = container.getBoundingClientRect()
      if (width === 0 || height === 0) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    resize()

    let pointerX = 0
    let pointerY = 0
    function onPointerMove(e: PointerEvent) {
      const rect = container.getBoundingClientRect()
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }

    let autoRotation = 0
    function renderFrame() {
      autoRotation += 0.0009
      points.rotation.y = autoRotation + pointerX * 0.12
      points.rotation.x += (pointerY * -0.1 - points.rotation.x) * 0.04
      renderer.render(scene, camera)
    }
    renderFrame()

    let frameId = 0
    let isVisible = true

    if (!prefersReducedMotion) {
      const animate = () => {
        if (isVisible) renderFrame()
        frameId = requestAnimationFrame(animate)
      }
      frameId = requestAnimationFrame(animate)
      window.addEventListener('pointermove', onPointerMove)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    function onVisibilityChange() {
      isVisible = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    // Pauses the loop once the hero has scrolled out of view — no point
    // spending a frame budget animating particles nobody can see.
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && document.visibilityState === 'visible'
      },
      { threshold: 0 },
    )
    intersectionObserver.observe(container)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}
