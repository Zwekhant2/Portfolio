import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'now', label: 'Now' },
  { id: 'capabilities', label: 'Skills' },
  { id: 'certifications', label: 'Certs' },
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
        <span className="strip-name">Zwe Khant Lwin</span>
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
          <span className="strip-status">
            <span className="dot" aria-hidden="true"></span>
            Available · Helsinki
          </span>
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
