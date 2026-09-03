import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'capabilities', label: 'Skills' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

interface NavStripProps {
  theme: Theme
  onToggleTheme: () => void
  menuOpen: boolean
  onToggleMenu: () => void
}

export function NavStrip({ theme, onToggleTheme, menuOpen, onToggleMenu }: NavStripProps) {
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id))

  return (
    <div className="strip">
      <div className="strip-inner">
        <a href="#" className="strip-mark" aria-label="Zwe Khant Lwin — home">
          Zwe Khant Lwin
        </a>
        <nav aria-label="Page sections">
          <ul className="strip-nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={active === item.id ? 'active' : ''}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="strip-right">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle colour theme">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={onToggleMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export { NAV_ITEMS }
