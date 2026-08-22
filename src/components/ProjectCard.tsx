import type { Project } from '../data/projects'
import { illustrationMap } from './illustrations'
import { useTilt } from '../hooks/useTilt'
import { useReveal } from '../hooks/useReveal'
import { useViewTransitionName } from '../hooks/useViewTransitionName'
import { formatMonthYear, useGitHubStats } from '../hooks/useGitHubStats'

interface ProjectCardProps {
  project: Project
  delay: 1 | 2 | 3 | 4
}

export function ProjectCard({ project, delay }: ProjectCardProps) {
  const { ref: revealRef, visible } = useReveal<HTMLElement>()
  const { ref: tiltRef, onMouseMove, onMouseLeave } = useTilt<HTMLElement>()
  const previewRef = useViewTransitionName<HTMLDivElement>(`card-preview-${project.id}`)
  const titleRef = useViewTransitionName<HTMLHeadingElement>(`card-title-${project.id}`)
  const Illustration = illustrationMap[project.illustration]
  const ghStats = useGitHubStats(project.linkHref)
  const caseStudyHref = `#/work/${project.id}`

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
      <a className="card-preview-link" href={caseStudyHref} aria-label={`Read the ${project.title} case study`}>
        <div ref={previewRef} className="card-preview" data-color={project.color}>
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
      </a>
      <div className="card-body">
        <div className="card-body-top">
          <span className="card-num">
            {project.number} · {project.year}
          </span>
          <div className="card-tags">
            <span className="meta-badge">{project.badge}</span>
            <span className="card-tag-sub">{project.badgeSub}</span>
            {ghStats && (
              <span className="gh-stat">
                <span className="gh-stat-star">★</span> {ghStats.stars} · {formatMonthYear(ghStats.updatedAt)}
              </span>
            )}
          </div>
        </div>
        <h3 ref={titleRef}>
          <a className="card-title-link" href={caseStudyHref}>
            {project.title}
          </a>
        </h3>
        <p>{project.description}</p>
        <a className="card-link" href={project.linkHref} target="_blank" rel="noopener">
          {project.linkLabel}
        </a>
      </div>
    </article>
  )
}
