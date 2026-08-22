import { useEffect, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { useHashRoute } from './hooks/useHashRoute'
import { projects } from './data/projects'
import { IntroLoader } from './components/IntroLoader'
import { Background } from './components/Background'
import { ProgressBar } from './components/ProgressBar'
import { CustomCursor } from './components/CustomCursor'
import { NavStrip } from './components/NavStrip'
import { MobileMenu } from './components/MobileMenu'
import { CommandPalette } from './components/CommandPalette'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { WorkSection } from './components/WorkSection'
import { NowSection } from './components/NowSection'
import { Capabilities } from './components/Capabilities'
import { Credentials } from './components/Credentials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ProjectDetail } from './components/ProjectDetail'

const SITE_TITLE = 'Zwe Khant Lwin — Web Developer & Designer'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cmdkOpen, setCmdkOpen] = useState(false)
  const route = useHashRoute()
  const activeProject = projects.find((p) => p.id === route.replace(/^\/work\//, '')) ?? null

  useEffect(() => {
    document.body.style.overflow = menuOpen || cmdkOpen ? 'hidden' : ''
  }, [menuOpen, cmdkOpen])

  useEffect(() => {
    document.title = activeProject ? `${activeProject.title} — Zwe Khant Lwin` : SITE_TITLE
  }, [activeProject])

  useEffect(() => {
    if (!activeProject && route) {
      document.getElementById(route)?.scrollIntoView()
    }
  }, [route, activeProject])

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
        onOpenCommandPalette={() => {
          setMenuOpen(false)
          setCmdkOpen(true)
        }}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <CommandPalette
        open={cmdkOpen}
        onOpen={() => {
          setMenuOpen(false)
          setCmdkOpen(true)
        }}
        onClose={() => setCmdkOpen(false)}
        onToggleTheme={toggleTheme}
      />

      <main>
        {activeProject ? (
          <ProjectDetail project={activeProject} />
        ) : (
          <>
            <Hero theme={theme} />
            <Marquee />
            <div className="wrap">
              <WorkSection />
              <NowSection />
              <Capabilities />
              <Credentials />
              <Contact />
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  )
}
