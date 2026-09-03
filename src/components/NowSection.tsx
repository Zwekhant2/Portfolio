import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from './SectionHeading'

const ENTRIES: { term: string; detail: React.ReactNode }[] = [
  {
    term: 'recently',
    detail: (
      <>
        Completed a web development traineeship at{' '}
        <strong className="font-semibold text-fg">SpeedZone</strong> (Zone Media OY): WordPress
        maintenance, client migrations, and technical documentation.
      </>
    ),
  },
  {
    term: 'graduated',
    detail: (
      <>
        BBA in Business Information Technology from{' '}
        <strong className="font-semibold text-fg">Haaga-Helia University of Applied Sciences</strong>
        , Helsinki, majoring in ICT Infrastructures and Cloud Services. Class of 2026.
      </>
    ),
  },
  {
    term: 'thesis',
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
    term: 'building',
    detail: (
      <>
        This portfolio, rebuilt in{' '}
        <strong className="font-semibold text-fg">React &amp; TypeScript</strong> —
        component-driven, typed project data, styled with Tailwind.
      </>
    ),
  },
  {
    term: 'open to',
    detail:
      'Full-stack, front-end and cloud roles in Helsinki, or remote across Finland and the Nordics.',
  },
]

export function NowSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="scroll-mt-24 border-b border-line py-16 sm:py-20" id="now">
      <SectionHeading eyebrow="now" title="What I'm doing this season" />

      <div ref={ref} className={`reveal reveal-d1 mt-12 border-t border-line${visible ? ' visible' : ''}`}>
        <dl>
          {ENTRIES.map((entry) => (
            <div
              key={entry.term}
              className="grid gap-2 border-b border-line py-5 sm:grid-cols-[8rem_1fr] sm:gap-8"
            >
              <dt className="label sm:pt-1">{entry.term}</dt>
              <dd className="max-w-2xl leading-relaxed text-fg-2">{entry.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
