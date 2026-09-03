import { projects } from '../data/projects'
import { useCountUp } from '../hooks/useCountUp'

const STACK_GROUPS = [
  { label: 'web', items: ['React 19', 'TypeScript', 'PHP', 'WordPress'] },
  { label: 'api', items: ['C# / .NET 8', 'SQLite', 'Dapper', 'MySQL'] },
  { label: 'cloud', items: ['AWS', 'CloudFormation', 'Docker', 'Linux'] },
]

export function Hero() {
  // Derived, not hardcoded: the counter tracks the work index and cannot drift.
  const projectsCount = useCountUp(projects.length, true)
  const yearsCount = useCountUp(2, true)

  const readout = [
    { label: 'projects', value: String(projectsCount).padStart(2, '0') },
    { label: 'thesis', value: '5/5' },
    { label: 'ects', value: '210' },
    { label: 'years', value: `${yearsCount}+` },
  ]

  return (
    <section className="border-b border-line pt-14 pb-16 sm:pt-20 sm:pb-20">
        <p className="font-mono text-xs text-fg-3">
          <span className="text-accent">zwe</span>@helsinki:~$ whoami
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_260px] lg:gap-16">
          <div>
            <h1 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Full-Stack &amp; Cloud Developer
            </h1>

            <p className="mt-6 max-w-2xl leading-relaxed text-fg-2">
              I build web applications with React, TypeScript and C# / .NET, and run them on AWS
              infrastructure I write as code. BBA in Business Information Technology from
              Haaga-Helia, majoring in ICT Infrastructures and Cloud Services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
              <a
                href="#work"
                className="border-b border-accent pb-0.5 text-accent transition-opacity hover:opacity-70"
              >
                view work →
              </a>
              <a
                href="#contact"
                className="border-b border-line-2 pb-0.5 text-fg-2 transition-colors hover:border-fg hover:text-fg"
              >
                get in touch
              </a>
              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download
                className="border-b border-line-2 pb-0.5 text-fg-2 transition-colors hover:border-fg hover:text-fg"
              >
                cv.pdf
              </a>
            </div>

            {/* Data readout: mono, tabular, hairline-separated. */}
            <dl className="mt-12 grid max-w-2xl grid-cols-2 border-t border-l border-line sm:grid-cols-4">
              {readout.map((item) => (
                <div key={item.label} className="border-r border-b border-line px-4 py-3.5">
                  <dd className="font-mono text-2xl font-medium tabular-nums">{item.value}</dd>
                  <dt className="label mt-1">{item.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:pt-2">
            <figure className="relative">
              <img
                src={`${import.meta.env.BASE_URL}photo.jpg`}
                alt="Zwe Khant Lwin"
                className="aspect-[4/5] w-full max-w-[260px] border border-line object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
              <figcaption className="mt-3 font-mono text-xs text-fg-3">
                Zwe Khant Lwin
                <br />
                Vantaa, FI · UTC+2
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Stack, grouped and static — a list, not a marquee. */}
        <div className="mt-14 grid gap-x-10 gap-y-6 border-t border-line pt-8 sm:grid-cols-3">
          {STACK_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="label">{group.label}</p>
              <ul className="mt-2.5 space-y-1.5 font-mono text-sm text-fg-2">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </section>
  )
}
