import { NAV_ITEMS } from './NavStrip'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-x-0 top-14 z-40 border-b border-line bg-bg transition-opacity duration-200 lg:hidden ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      aria-hidden={!open}
    >
      <nav aria-label="Mobile navigation" className="mx-auto w-full max-w-6xl px-6 py-2 sm:px-8">
        <ul className="font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="border-b border-line last:border-b-0">
              <a
                href={`#${item.id}`}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="block py-3.5 text-fg-2 transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
