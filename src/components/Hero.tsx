import { projects } from '../data/projects'
import { useCountUp } from '../hooks/useCountUp'
import { TechMarquee } from './TechMarquee'

const STAT_ICONS = [
  <path key="a" d="M4 7h16M4 12h16M4 17h10" />,
  <path key="b" d="m12 3 2.6 5.7 6.4.7-4.8 4.3 1.4 6.3L12 17l-5.6 3 1.4-6.3L3 9.4l6.4-.7L12 3Z" />,
  <path key="c" d="M12 8v4l3 2M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />,
]

export function Hero() {
  // Derived, not hardcoded: the counter tracks the work index and cannot drift.
  const projectsCount = useCountUp(projects.length, true)
  const yearsCount = useCountUp(2, true)

  const stats = [
    { label: 'Projects shipped', value: String(projectsCount) },
    { label: 'Thesis grade', value: '5 / 5' },
    { label: 'Years coding', value: `${yearsCount}+` },
  ]

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
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-2 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                View my work
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
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold text-fg shadow-card transition-colors hover:bg-surface-2"
              >
                Get in touch
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="ring-gradient rounded-2xl border border-line bg-surface p-4 shadow-card"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4 text-brand"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    {STAT_ICONS[i]}
                  </svg>
                  <dd className="mt-2.5 text-2xl font-bold tracking-tight tabular-nums sm:text-3xl">
                    {stat.value}
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

            <span className="absolute -top-3 -right-3 rotate-3 rounded-xl border border-line bg-surface px-3 py-2 text-xs font-semibold shadow-lift">
              🎓 BBA · 2026
            </span>
            <span className="absolute -bottom-4 -left-4 -rotate-3 rounded-xl border border-line bg-surface px-3 py-2 text-xs font-semibold shadow-lift">
              ☁️ AWS · CCNA
            </span>
          </div>
        </div>

        <TechMarquee />
      </div>
    </section>
  )
}
