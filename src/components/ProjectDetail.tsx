import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { illustrationMap } from './illustrations'
import { useViewTransitionName } from '../hooks/useViewTransitionName'

export function ProjectDetail({ project }: { project: Project }) {
  const Illustration = illustrationMap[project.illustration]
  const titleRef = useViewTransitionName<HTMLHeadingElement>(`case-title-${project.id}`)
  const others = projects.filter((p) => p.id !== project.id)

  const facts = [
    { label: 'Role', value: project.role },
    ...project.facts,
    { label: 'Built with', value: project.stack.join(', ') },
  ]

  return (
    <article className="py-12 sm:py-16">
      <a
        className="inline-flex items-center gap-2 text-sm font-medium text-fg-2 transition-colors hover:text-brand"
        href="#work"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        Back to work
      </a>

      <header className="mt-8 max-w-3xl">
        <p className="flex flex-wrap items-center gap-x-2 text-sm text-fg-3">
          <span>{project.context}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
        </p>
        <h1
          ref={titleRef}
          className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl"
        >
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-fg-2">{project.standfirst}</p>
      </header>

      <figure className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-2 to-brand-3 p-8 shadow-lift sm:p-14">
        {/* The illustrations are 200x120 viewBox with no intrinsic size, so cap
            the width or they scale to the full container. */}
        <div className="mx-auto max-w-2xl">
          <Illustration />
        </div>
      </figure>

      <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <dl className="rounded-2xl border border-line bg-surface p-6 shadow-card">
            {facts.map((fact, i) => (
              <div key={fact.label} className={i > 0 ? 'mt-4 border-t border-line pt-4' : ''}>
                <dt className="text-xs font-semibold tracking-[0.12em] text-fg-3 uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="min-w-0">
          {project.sections.map((section) => (
            <section key={section.heading} className="mb-10 last:mb-0">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{section.heading}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="mt-4 leading-relaxed text-fg-2">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <div className="mt-10 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                {link.label}
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="mt-20 border-t border-line pt-10" aria-label="More work">
        <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">More work</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {others.map((p) => (
            <li key={p.id}>
              <a
                href={`#/work/${p.id}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="text-xs font-medium text-fg-3">{p.year}</span>
                <span className="mt-1.5 font-semibold tracking-tight text-balance group-hover:text-brand">
                  {p.title}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-fg-2">{p.standfirst}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  )
}
