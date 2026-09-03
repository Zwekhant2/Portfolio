import { projects } from '../data/projects'
import { useCountUp } from '../hooks/useCountUp'

const STATS = [
  { label: 'Projects shipped', suffix: '' },
  { label: 'Thesis grade', suffix: '' },
  { label: 'Years coding', suffix: '+' },
]

export function Hero() {
  // Derived, not hardcoded: the counter tracks the work index and cannot drift.
  const projectsCount = useCountUp(projects.length, true)
  const yearsCount = useCountUp(2, true)
  const values = [String(projectsCount), '5 / 5', String(yearsCount)]

  return (
    <section className="relative overflow-hidden">
      <div className="aurora" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs font-medium text-fg-2 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              Open to work · Helsinki &amp; remote
            </p>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Full-Stack &amp; <span className="text-gradient">Cloud Developer</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-2">
              I build web applications with React, TypeScript and C# / .NET, and run them on AWS
              infrastructure I write as code. BBA in Business Information Technology from
              Haaga-Helia, majoring in ICT Infrastructures and Cloud Services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-xl bg-gradient-to-br from-brand to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold text-fg shadow-card transition-colors hover:bg-surface-2"
              >
                Get in touch
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-line bg-surface p-4 shadow-card"
                >
                  <dd className="text-2xl font-bold tracking-tight tabular-nums sm:text-3xl">
                    {values[i]}
                    {stat.suffix}
                  </dd>
                  <dt className="mt-1 text-xs leading-snug text-fg-3">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/30 via-brand-2/20 to-brand-3/25 blur-2xl"
              aria-hidden="true"
            />
            <figure className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-lift">
              <img
                src={`${import.meta.env.BASE_URL}photo.jpg`}
                alt="Zwe Khant Lwin"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-xl border border-white/15 bg-black/45 px-4 py-3 text-white backdrop-blur-md">
                <p className="text-sm font-semibold">Zwe Khant Lwin</p>
                <p className="text-xs text-white/70">Vantaa, Finland</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
