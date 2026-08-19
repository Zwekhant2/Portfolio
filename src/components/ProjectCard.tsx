import type { Project } from '../data/projects'
import { illustrationMap } from './illustrations'
import { useTilt } from '../hooks/useTilt'
import { useReveal } from '../hooks/useReveal'

interface ProjectCardProps {
  project: Project
  delay: 1 | 2 | 3 | 4
}

export function ProjectCard({ project, delay }: ProjectCardProps) {
  const { ref: revealRef, visible } = useReveal<HTMLElement>()
  const { ref: tiltRef, onMouseMove, onMouseLeave } = useTilt<HTMLElement>()
  const Illustration = illustrationMap[project.illustration]

  function setRefs(el: HTMLElement | null) {
    revealRef.current = el
    tiltRef.current = el
  }

  return (
    <article
      ref={setRefs}
      className={`work-card tilt reveal reveal-d${delay}${visible ? ' visible' : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="card-preview" data-color={project.color}>
        <span className="preview-num">{project.number}</span>
        <div className="card-illustration">
          <Illustration />
        </div>
        <div className="preview-chips">
          {project.chips.map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="card-body">
        <div className="card-num">
          {project.number} · {project.year}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a className="card-link" href={project.linkHref} target="_blank" rel="noopener">
          {project.linkLabel}
        </a>
      </div>
      <div className="card-meta">
        <div>
          <div className="meta-badge">{project.badge}</div>
          <br />
          {project.badgeSub}
        </div>
        <span>{project.year}</span>
      </div>
    </article>
  )
}
