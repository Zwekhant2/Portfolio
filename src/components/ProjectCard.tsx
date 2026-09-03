import type { Project } from '../data/projects'
import { illustrationMap } from './illustrations'
import { useReveal } from '../hooks/useReveal'
import { useSpotlight } from '../hooks/useSpotlight'
import { useViewTransitionName } from '../hooks/useViewTransitionName'

interface ProjectCardProps {
  project: Project
  delay: 1 | 2 | 3
  /** The first card is given double width on wide screens. */
  featured?: boolean
}

export function ProjectCard({ project, delay, featured = false }: ProjectCardProps) {
  const { ref, visible } = useReveal<HTMLElement>()
  const { ref: spotRef, onMouseMove } = useSpotlight<HTMLAnchorElement>()
  const titleRef = useViewTransitionName<HTMLHeadingElement>(`case-title-${project.id}`)
  const Illustration = illustrationMap[project.illustration]

  return (
    <article
      ref={ref}
      className={`reveal reveal-d${delay} group h-full${featured ? ' lg:col-span-2' : ''}${
        visible ? ' visible' : ''
      }`}
    >
      <a
        ref={spotRef}
        onMouseMove={onMouseMove}
        href={`#/work/${project.id}`}
        aria-label={`Read the ${project.title} case study`}
        className="ring-gradient spotlight flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      >
        <div
          className={`relative overflow-hidden bg-gradient-to-br from-brand via-brand-2 to-brand-3 ${
            featured ? 'p-8 lg:p-12' : 'p-6'
          }`}
        >
          <div className="mx-auto max-w-md transition-transform duration-500 group-hover:scale-[1.04]">
            <Illustration />
          </div>
          <span className="absolute top-3 right-3 rounded-md bg-black/25 px-2 py-1 text-xs font-semibold text-white backdrop-blur">
            {project.year}
          </span>
        </div>

        <div className="relative z-10 flex flex-1 flex-col p-6">
          <p className="flex flex-wrap items-center gap-x-2 text-xs font-medium text-fg-3">
            <span>{project.role}</span>
            <span aria-hidden="true">·</span>
            <span>{project.context}</span>
          </p>

          <h3
            ref={titleRef}
            className="mt-2 text-lg font-semibold tracking-tight text-balance transition-colors group-hover:text-brand"
          >
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-2">{project.standfirst}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, featured ? 6 : 4).map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-surface-2 px-2 py-1 text-xs font-medium text-fg-2"
              >
                {tech}
              </li>
            ))}
          </ul>

          <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            Read the case study
            <svg
              viewBox="0 0 24 24"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </p>
        </div>
      </a>
    </article>
  )
}
