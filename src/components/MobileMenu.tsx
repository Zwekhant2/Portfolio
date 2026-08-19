import { NAV_ITEMS } from './NavStrip'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <nav className={`mob-menu${open ? ' open' : ''}`} aria-label="Mobile navigation">
      {NAV_ITEMS.map((item) => (
        <a key={item.id} href={`#${item.id}`} className="mob-link" onClick={onClose}>
          {item.label}
        </a>
      ))}
    </nav>
  )
}
