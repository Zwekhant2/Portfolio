function formatDate(d: Date): string {
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  return `${dd}.${mm}.${d.getFullYear()}`
}

export function Footer() {
  const now = new Date()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 py-10 text-sm text-fg-3 sm:flex-row sm:justify-between sm:px-8">
        <span>© {now.getFullYear()} Zwe Khant Lwin · Built with React, TypeScript &amp; Tailwind</span>
        <span>Last deployed {formatDate(now)}</span>
      </div>
    </footer>
  )
}
