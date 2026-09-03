import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'

const NAV_ITEMS = [
  { id: 'work', label: 'work' },
  { id: 'now', label: 'now' },
  { id: 'capabilities', label: 'skills' },
  { id: 'certifications', label: 'credentials' },
  { id: 'contact', label: 'contact' },
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
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-6 px-6 sm:px-8">
        <a href="#" className="font-mono text-sm" aria-label="Zwe Khant Lwin — home">
          <span className="text-accent">$</span> zwe-khant-lwin
        </a>

        <nav aria-label="Page sections" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-6 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`transition-colors ${
                    active === item.id ? 'text-accent' : 'text-fg-3 hover:text-fg'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-5 lg:ml-8">
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="font-mono text-xs text-fg-3 transition-colors hover:text-fg"
          >
            {theme === 'dark' ? '[light]' : '[dark]'}
          </button>

          <button
            onClick={onToggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="font-mono text-xs text-fg-3 transition-colors hover:text-fg lg:hidden"
          >
            {menuOpen ? '[close]' : '[menu]'}
          </button>
        </div>
      </div>
    </header>
  )
}

export { NAV_ITEMS }
