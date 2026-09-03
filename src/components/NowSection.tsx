import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from './SectionHeading'

const ENTRIES: { term: string; detail: React.ReactNode }[] = [
  {
    term: 'Recently',
    detail: (
      <>
        Completed a web development traineeship at <strong className="font-semibold text-fg">SpeedZone</strong>{' '}
        (Zone Media OY): WordPress maintenance, client migrations, and technical documentation.
      </>
    ),
  },
  {
    term: 'Graduated',
    detail: (
      <>
        BBA in Business Information Technology from{' '}
        <strong className="font-semibold text-fg">Haaga-Helia University of Applied Sciences</strong>,
        Helsinki, majoring in ICT Infrastructures and Cloud Services. Class of 2026.
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
        This portfolio, rebuilt in <strong className="font-semibold text-fg">React &amp; TypeScript</strong>{' '}
        — component-driven, typed project data, styled with Tailwind.
      </>
    ),
  },
  {
    term: 'Open to',
    detail: 'Full-stack, front-end and cloud roles in Helsinki, or remote across Finland and the Nordics.',
  },
]

export function NowSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="now">
      <SectionHeading eyebrow="Now" title="What I'm doing this season" />

      <div
        ref={ref}
        className={`reveal reveal-d1 mx-auto mt-14 max-w-3xl rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8${
          visible ? ' visible' : ''
        }`}
      >
        <dl className="space-y-6">
          {ENTRIES.map((entry, i) => (
            <div
              key={entry.term}
              className={`grid gap-2 sm:grid-cols-[110px_1fr] sm:gap-6 ${
                i > 0 ? 'border-t border-line pt-6' : ''
              }`}
            >
              <dt className="text-xs font-semibold tracking-[0.12em] text-brand uppercase sm:pt-1">
                {entry.term}
              </dt>
              <dd className="text-sm leading-relaxed text-fg-2 sm:text-base">{entry.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
