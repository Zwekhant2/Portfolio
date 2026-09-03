import type { Project } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import { useViewTransitionName } from '../hooks/useViewTransitionName'

interface ProjectRowProps {
  project: Project
  index: number
}

export function ProjectRow({ project, index }: ProjectRowProps) {
  const { ref, visible } = useReveal<HTMLElement>()
  const titleRef = useViewTransitionName<HTMLHeadingElement>(`case-title-${project.id}`)

  return (
    <article ref={ref} className={`reveal group${visible ? ' visible' : ''}`}>
      <a
        href={`#/work/${project.id}`}
        aria-label={`Read the ${project.title} case study`}
        className="row-rule grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 gap-y-2 border-b border-line py-6 sm:grid-cols-[3rem_1fr_14rem_5rem] sm:gap-x-8"
      >
        <span className="font-mono text-xs text-fg-3 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="min-w-0">
          <h3
            ref={titleRef}
            className="text-lg font-medium tracking-tight text-balance transition-colors group-hover:text-accent"
          >
            {project.title}
          </h3>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-fg-2">{project.standfirst}</p>
          <p className="mt-2 font-mono text-xs text-fg-3 sm:hidden">
            {project.stack.slice(0, 3).join(' · ')}
          </p>
        </div>

        <ul className="hidden font-mono text-xs text-fg-3 sm:block">
          {project.stack.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <span className="justify-self-end font-mono text-xs text-fg-3 tabular-nums transition-colors group-hover:text-accent">
          {project.year}
        </span>
      </a>
    </article>
  )
}
