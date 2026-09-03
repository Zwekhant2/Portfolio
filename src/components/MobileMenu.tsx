import { NAV_ITEMS } from './NavStrip'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-x-0 top-16 z-40 border-b border-line bg-bg/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
        open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
      }`}
      aria-hidden={!open}
    >
      <nav aria-label="Mobile navigation" className="mx-auto w-full max-w-6xl px-6 py-4 sm:px-8">
        <ul className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="block rounded-lg px-3 py-3 text-base font-medium text-fg-2 transition-colors hover:bg-surface-2 hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
          className="mt-2 block rounded-lg bg-fg px-4 py-3 text-center text-sm font-semibold text-bg"
        >
          Get in touch
        </a>
      </nav>
    </div>
  )
}
