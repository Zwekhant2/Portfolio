import { useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { NAV_ITEMS } from './NavStrip'
import { projects } from '../data/projects'

interface Command {
  id: string
  label: string
  hint: string
  run: () => void
}

interface CommandPaletteProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
  onToggleTheme: () => void
}

export function CommandPalette({ open, onOpen, onClose, onToggleTheme }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = useMemo<Command[]>(() => {
    const sectionCommands = [...NAV_ITEMS, { id: 'contact', label: 'Contact' }].map((item) => ({
      id: `section-${item.id}`,
      label: item.label,
      hint: 'Section',
      run: () => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }),
    }))

    const projectCommands = projects.map((project) => ({
      id: `project-${project.id}`,
      label: project.title,
      hint: 'Project',
      run: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
        window.open(project.linkHref, '_blank', 'noopener')
      },
    }))

    const actionCommands: Command[] = [
      { id: 'theme', label: 'Toggle theme', hint: 'Action', run: onToggleTheme },
      {
        id: 'cv',
        label: 'Download CV',
        hint: 'Action',
        run: () => {
          const link = document.createElement('a')
          link.href = `${import.meta.env.BASE_URL}cv.pdf`
          link.download = ''
          link.click()
        },
      },
      { id: 'email', label: 'Email me', hint: 'Contact', run: () => window.open('mailto:zwekhantlwin5@gmail.com') },
      {
        id: 'github',
        label: 'Open GitHub',
        hint: 'Link',
        run: () => window.open('https://github.com/Zwekhant2', '_blank', 'noopener'),
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        hint: 'Link',
        run: () => window.open('https://www.linkedin.com/in/zwe-khant-lwin-948731258/', '_blank', 'noopener'),
      },
    ]

    return [...sectionCommands, ...projectCommands, ...actionCommands]
  }, [onToggleTheme])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((cmd) => cmd.label.toLowerCase().includes(q) || cmd.hint.toLowerCase().includes(q))
  }, [commands, query])

  useEffect(() => {
    function onKeyDown(e: globalThis.KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (open) onClose()
        else onOpen()
      } else if (e.key === 'Escape' && open) {
        onClose()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onOpen, onClose])

  useEffect(() => {
    if (!open) return
    setQuery('')
    setActiveIndex(0)
    const raf = requestAnimationFrame(() => inputRef.current?.focus())
    return () => cancelAnimationFrame(raf)
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  function runCommand(cmd: Command) {
    cmd.run()
    onClose()
  }

  function onInputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const cmd = filtered[activeIndex]
      if (cmd) runCommand(cmd)
    }
  }

  if (!open) return null

  return (
    <div className="cmdk-overlay" onClick={onClose}>
      <div className="cmdk-panel" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="cmdk-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onInputKeyDown}
          placeholder="Jump to a section, project, or action..."
          aria-label="Command palette"
        />
        <div className="cmdk-list" role="listbox">
          {filtered.length === 0 && <div className="cmdk-empty">No matches</div>}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.id}
              className={`cmdk-item${i === activeIndex ? ' active' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => runCommand(cmd)}
              role="option"
              aria-selected={i === activeIndex}
            >
              <span>{cmd.label}</span>
              <span className="cmdk-hint">{cmd.hint}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
