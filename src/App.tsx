import { useEffect, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { useHashRoute } from './hooks/useHashRoute'
import { projects } from './data/projects'
import { NavStrip } from './components/NavStrip'
import { MobileMenu } from './components/MobileMenu'
import { Hero } from './components/Hero'
import { WorkSection } from './components/WorkSection'
import { NowSection } from './components/NowSection'
import { Capabilities } from './components/Capabilities'
import { Credentials } from './components/Credentials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ProjectDetail } from './components/ProjectDetail'

const SITE_TITLE = 'Zwe Khant Lwin — Full-Stack & Cloud Developer'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const route = useHashRoute()
  const activeProject = projects.find((p) => p.id === route.replace(/^\/work\//, '')) ?? null

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

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
      <NavStrip
        theme={theme}
        onToggleTheme={toggleTheme}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        {activeProject ? (
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
            <ProjectDetail project={activeProject} />
          </div>
        ) : (
          <>
            <Hero />
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
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
