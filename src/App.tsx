import { useEffect, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { IntroLoader } from './components/IntroLoader'
import { Background } from './components/Background'
import { ProgressBar } from './components/ProgressBar'
import { CustomCursor } from './components/CustomCursor'
import { NavStrip } from './components/NavStrip'
import { MobileMenu } from './components/MobileMenu'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { WorkSection } from './components/WorkSection'
import { NowSection } from './components/NowSection'
import { Capabilities } from './components/Capabilities'
import { Credentials } from './components/Credentials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <IntroLoader />
      <Background />
      <ProgressBar />
      <CustomCursor />
      <NavStrip
        theme={theme}
        onToggleTheme={toggleTheme}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero theme={theme} />
        <Marquee />
        <div className="wrap">
          <WorkSection />
          <NowSection />
          <Capabilities />
          <Credentials />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  )
}
