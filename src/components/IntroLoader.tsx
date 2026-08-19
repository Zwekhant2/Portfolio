import { useEffect, useState } from 'react'

export function IntroLoader() {
  const [out, setOut] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setOut(true), 820)
    return () => clearTimeout(t)
  }, [])

  return (
    <div id="intro" className={out ? 'out' : ''} aria-hidden="true">
      <div className="intro-mono">ZKL</div>
      <div className="intro-rule"></div>
    </div>
  )
}
