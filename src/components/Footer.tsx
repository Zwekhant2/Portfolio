function formatDate(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`
}

export function Footer() {
  const now = new Date()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 font-mono text-xs text-fg-3 sm:flex-row sm:justify-between sm:px-8">
        <span>© {now.getFullYear()} Zwe Khant Lwin · React, TypeScript, Tailwind</span>
        <span>last deploy {formatDate(now)}</span>
      </div>
    </footer>
  )
}
