import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function WorkSection() {
  const [filter, setFilter] = useState<string | null>(null)

  const tags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((project) => project.chips.forEach((chip) => set.add(chip)))
    return Array.from(set).sort()
  }, [])

  const filtered = filter ? projects.filter((project) => project.chips.includes(filter)) : projects

  return (
    <section className="section" id="work">
      <SectionHeading eyebrow={`Selected work · 0${projects.length} projects`} title="Work" />
      <div className="work-filters" role="group" aria-label="Filter projects by tag">
        <button
          className={`pill pill-outline pill-sm${filter === null ? ' active' : ''}`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`pill pill-outline pill-sm${filter === tag ? ' active' : ''}`}
            onClick={() => setFilter(tag === filter ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="work-grid">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} />
        ))}
      </div>
    </section>
  )
}
