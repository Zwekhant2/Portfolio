import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { illustrationMap } from './illustrations'
import { useViewTransitionName } from '../hooks/useViewTransitionName'

export function ProjectDetail({ project }: { project: Project }) {
  const Illustration = illustrationMap[project.illustration]
  const titleRef = useViewTransitionName<HTMLHeadingElement>(`case-title-${project.id}`)
  const others = projects.filter((p) => p.id !== project.id)

  return (
    <article className="case">
      <div className="case-rail">
        <a className="case-back" href="#work">
          Back to work
        </a>
      </div>

      <header className="case-head">
        <p className="case-kicker">
          {project.context}
          <span className="case-kicker-sep">/</span>
          {project.year}
        </p>
        <h1 ref={titleRef} className="case-title">
          {project.title}
        </h1>
        <p className="case-standfirst">{project.standfirst}</p>
      </header>

      <figure className="case-figure">
        <Illustration />
      </figure>

      <div className="case-body">
        <aside className="case-facts">
          <dl>
            <div className="case-fact">
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            {project.facts.map((fact) => (
              <div className="case-fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
            <div className="case-fact">
              <dt>Built with</dt>
              <dd>{project.stack.join(', ')}</dd>
            </div>
          </dl>
        </aside>

        <div className="case-prose">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="case-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="case-next" aria-label="More work">
        <p className="case-next-label">More work</p>
        <ul>
          {others.map((p) => (
            <li key={p.id}>
              <a href={`#/work/${p.id}`}>
                <span className="case-next-year">{p.year}</span>
                <span className="case-next-title">{p.title}</span>
                <span className="case-next-standfirst">{p.standfirst}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  )
}
