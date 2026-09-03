import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { illustrationMap } from './illustrations'
import { useViewTransitionName } from '../hooks/useViewTransitionName'

export function ProjectDetail({ project }: { project: Project }) {
  const Illustration = illustrationMap[project.illustration]
  const titleRef = useViewTransitionName<HTMLHeadingElement>(`case-title-${project.id}`)
  const others = projects.filter((p) => p.id !== project.id)

  const facts = [
    { label: 'role', value: project.role },
    ...project.facts.map((f) => ({ label: f.label.toLowerCase(), value: f.value })),
    { label: 'built with', value: project.stack.join(', ') },
  ]

  return (
    <article className="py-12">
      <a
        className="font-mono text-sm text-fg-3 transition-colors hover:text-accent"
        href="#work"
      >
        ← back to index
      </a>

      <header className="mt-10 border-b border-line pb-10">
        <p className="label">
          {project.context} · {project.year}
        </p>
        <h1
          ref={titleRef}
          className="mt-4 max-w-3xl text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-2">{project.standfirst}</p>
      </header>

      {/* The illustrations use white fills, so they sit on a solid dark panel
          rather than on the page ground. */}
      <figure className="mt-10 border border-line bg-panel p-8 sm:p-14">
        <div className="mx-auto max-w-2xl">
          <Illustration />
        </div>
      </figure>

      <div className="mt-12 grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <dl className="border-t border-line">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-line py-3.5">
                <dt className="label">{fact.label}</dt>
                <dd className="mt-1.5 font-mono text-sm leading-relaxed text-fg-2">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="min-w-0">
          {project.sections.map((section, i) => (
            <section key={section.heading} className="mb-10 last:mb-0">
              <h2 className="flex gap-4 text-xl font-semibold tracking-tight">
                <span className="font-mono text-sm text-accent tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {section.heading}
              </h2>
              {section.body.map((paragraph, j) => (
                <p key={j} className="mt-4 max-w-2xl leading-relaxed text-fg-2 sm:ml-10">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <div className="mt-10 flex flex-wrap gap-6 font-mono text-sm sm:ml-10">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener"
                className="border-b border-accent pb-0.5 text-accent transition-opacity hover:opacity-70"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="mt-20 border-t border-line pt-8" aria-label="More work">
        <p className="label">more work</p>
        <ul className="mt-4">
          {others.map((p, i) => (
            <li key={p.id}>
              <a
                href={`#/work/${p.id}`}
                className="row-rule group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 border-b border-line py-4 sm:gap-x-8"
              >
                <span className="font-mono text-xs text-fg-3 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-medium text-balance transition-colors group-hover:text-accent">
                  {p.title}
                </span>
                <span className="font-mono text-xs text-fg-3 tabular-nums">{p.year}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  )
}
