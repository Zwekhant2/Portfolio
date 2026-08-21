import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { Theme } from '../hooks/useTheme'

const ACCENT_BY_THEME: Record<Theme, number> = {
  light: 0x002fa7,
  dark: 0x5b84ff,
}

const PARTICLE_COUNT = 200

// Ashima Arts / Stefan Gustavson's classic 3D simplex noise (MIT), used
// verbatim — it's the standard reference implementation for GLSL vertex
// displacement, not worth reinventing.
const SNOISE_GLSL = `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
`

const CENTERPIECE_VERTEX = `
  uniform float uTime;
  uniform float uAmp;
  ${SNOISE_GLSL}
  void main() {
    vec3 pos = position;
    float n = snoise(pos * 0.9 + uTime * 0.15);
    pos += normal * n * uAmp;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const CENTERPIECE_FRAGMENT = `
  uniform vec3 uColor;
  uniform float uOpacity;
  void main() {
    gl_FragColor = vec4(uColor, uOpacity);
  }
`

export function HeroCanvas({ theme }: { theme: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const materialRef = useRef<THREE.PointsMaterial | null>(null)
  const centerpieceMaterialRef = useRef<THREE.ShaderMaterial | null>(null)

  // Recolor in place on theme change rather than tearing down the scene —
  // the particle field itself doesn't need to change, just its color.
  useEffect(() => {
    materialRef.current?.color.setHex(ACCENT_BY_THEME[theme])
    centerpieceMaterialRef.current?.uniforms.uColor.value.setHex(ACCENT_BY_THEME[theme])
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

    // Low-poly wireframe icosahedron, vertex-displaced by noise — a
    // geometric "morphing" centerpiece that reads as blueprint/technical
    // rather than organic, matching the site's mono/dot-grid language.
    const centerpieceGeometry = new THREE.IcosahedronGeometry(1, 3)
    const centerpieceMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uAmp: { value: 0.35 },
        uColor: { value: new THREE.Color(ACCENT_BY_THEME[theme]) },
        uOpacity: { value: 0.55 },
      },
      vertexShader: CENTERPIECE_VERTEX,
      fragmentShader: CENTERPIECE_FRAGMENT,
      wireframe: true,
      transparent: true,
      depthWrite: false,
    })
    centerpieceMaterialRef.current = centerpieceMaterial
    const centerpiece = new THREE.Mesh(centerpieceGeometry, centerpieceMaterial)
    scene.add(centerpiece)

    function resize() {
      const { width, height } = container.getBoundingClientRect()
      if (width === 0 || height === 0) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)

      const vFov = (camera.fov * Math.PI) / 180
      const visibleHeight = 2 * Math.tan(vFov / 2) * camera.position.z
      const visibleWidth = visibleHeight * camera.aspect

      // Mirrors the .hero-v2-photo breakpoint: below it the hero grows tall
      // with wrapped text, and the frustum's fixed vertical extent would
      // otherwise map to a huge on-screen shape with nothing to orbit.
      const isNarrow = width < 900
      centerpiece.visible = !isNarrow
      if (!isNarrow) {
        centerpiece.position.x = visibleWidth * 0.27
        centerpiece.position.y = 0
        centerpiece.scale.setScalar(visibleHeight * 0.16)
      }
    }
    resize()

    let pointerX = 0
    let pointerY = 0
    function onPointerMove(e: PointerEvent) {
      const rect = container.getBoundingClientRect()
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }

    function scrollProgress() {
      const rect = container.getBoundingClientRect()
      if (rect.height === 0) return 0
      return Math.min(Math.max(-rect.top, 0), rect.height) / rect.height
    }

    const clock = new THREE.Clock()
    let autoRotation = 0
    function renderFrame() {
      autoRotation += 0.0009
      points.rotation.y = autoRotation + pointerX * 0.12
      points.rotation.x += (pointerY * -0.1 - points.rotation.x) * 0.04

      const progress = scrollProgress()
      centerpieceMaterial.uniforms.uTime.value = clock.getElapsedTime()
      centerpieceMaterial.uniforms.uAmp.value = 0.35 + progress * 0.85
      centerpieceMaterial.uniforms.uOpacity.value = 0.55 * (1 - progress * 0.7)
      centerpiece.rotation.y += (autoRotation * 0.6 + pointerX * 0.35 - centerpiece.rotation.y) * 0.05
      centerpiece.rotation.x += (pointerY * -0.28 - centerpiece.rotation.x) * 0.05

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
      centerpieceGeometry.dispose()
      centerpieceMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}
