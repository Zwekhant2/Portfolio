function formatDate(d: Date): string {
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  return `${dd}.${mm}.${d.getFullYear()}`
}

export function Footer() {
  const now = new Date()

  return (
    <footer>
      <div className="wrap footer-row">
        <span>© {now.getFullYear()} Zwe Khant Lwin · Built with React &amp; TypeScript</span>
        <span>Last deployed {formatDate(now)}</span>
      </div>
    </footer>
  )
}
