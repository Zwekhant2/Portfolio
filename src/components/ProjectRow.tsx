import type { Project } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import { useViewTransitionName } from '../hooks/useViewTransitionName'

interface ProjectRowProps {
  project: Project
}

export function ProjectRow({ project }: ProjectRowProps) {
  const { ref, visible } = useReveal<HTMLElement>()
  const titleRef = useViewTransitionName<HTMLHeadingElement>(`case-title-${project.id}`)
  const href = `#/work/${project.id}`

  return (
    <article ref={ref} className={`entry reveal${visible ? ' visible' : ''}`}>
      <a className="entry-link" href={href} aria-label={`Read the ${project.title} case study`}>
        <span className="entry-year">{project.year}</span>
        <div className="entry-text">
          <h3 ref={titleRef} className="entry-title">
            {project.title}
          </h3>
          <p className="entry-standfirst">{project.standfirst}</p>
          <p className="entry-meta">
            {project.role}
            <span className="entry-meta-sep">/</span>
            {project.context}
          </p>
        </div>
        <span className="entry-cue" aria-hidden="true">
          Read
        </span>
      </a>
    </article>
  )
}
