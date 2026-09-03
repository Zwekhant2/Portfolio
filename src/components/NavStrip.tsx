import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'now', label: 'Now' },
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

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  )
}

export function NavStrip({ theme, onToggleTheme, menuOpen, onToggleMenu }: NavStripProps) {
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id))

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-6 sm:px-8">
        <a
          href="#"
          className="flex items-center gap-2.5 font-semibold tracking-tight text-fg"
          aria-label="Zwe Khant Lwin — home"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-white shadow-glow">
            Z
          </span>
          <span className="hidden sm:inline">Zwe Khant Lwin</span>
        </a>

        <nav aria-label="Page sections" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active === item.id
                      ? 'bg-surface-2 text-fg'
                      : 'text-fg-2 hover:bg-surface-2 hover:text-fg'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid size-9 place-items-center rounded-lg border border-line text-fg-2 transition-colors hover:bg-surface-2 hover:text-fg"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-lg bg-fg px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90 sm:inline-block"
          >
            Get in touch
          </a>

          <button
            onClick={onToggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="grid size-9 place-items-center rounded-lg border border-line text-fg-2 transition-colors hover:bg-surface-2 hover:text-fg lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export { NAV_ITEMS }
