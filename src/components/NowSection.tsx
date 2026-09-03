import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from './SectionHeading'

const ENTRIES: { term: string; detail: React.ReactNode }[] = [
  {
    term: 'Recently',
    detail: (
      <>
        Completed a web development traineeship at{' '}
        <strong className="font-semibold text-fg">SpeedZone</strong> (Zone Media OY): WordPress
        maintenance, client migrations, and technical documentation.
      </>
    ),
  },
  {
    term: 'Graduated',
    detail: (
      <>
        BBA in Business Information Technology from{' '}
        <strong className="font-semibold text-fg">Haaga-Helia University of Applied Sciences</strong>
        , Helsinki, majoring in ICT Infrastructures and Cloud Services. Class of 2026.
      </>
    ),
  },
  {
    term: 'Thesis',
    detail: (
      <>
        <strong className="font-semibold text-fg">
          WordPress Security: Comparison of Security Plugins and Implementation Guide
        </strong>
        , commissioned by SpeedZone.fi and grounded in attack-tree analysis and post-compromise
        cleanup. Graded 5 / 5.
      </>
    ),
  },
  {
    term: 'Building',
    detail: (
      <>
        This portfolio, rebuilt in{' '}
        <strong className="font-semibold text-fg">React &amp; TypeScript</strong> —
        component-driven, typed project data, styled with Tailwind.
      </>
    ),
  },
  {
    term: 'Open to',
    detail:
      'Full-stack, front-end and cloud roles in Helsinki, or remote across Finland and the Nordics.',
  },
]

export function NowSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="now">
      <SectionHeading eyebrow="Now" title="What I'm doing this season" />

      <div
        ref={ref}
        className={`reveal reveal-d1 mx-auto mt-14 max-w-3xl${visible ? ' visible' : ''}`}
      >
        {/* Timeline: a gradient spine with a node per entry. */}
        <ol className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-brand before:via-brand-2 before:to-transparent">
          {ENTRIES.map((entry) => (
            <li key={entry.term} className="relative pl-9">
              <span className="absolute top-1.5 left-0 grid size-[15px] place-items-center rounded-full border-2 border-brand bg-bg">
                <span className="size-1.5 rounded-full bg-brand" />
              </span>
              <h3 className="text-xs font-semibold tracking-[0.12em] text-brand uppercase">
                {entry.term}
              </h3>
              <p className="mt-2 leading-relaxed text-fg-2">{entry.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
