import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from './SectionHeading'

export function NowSection() {
  const { ref, visible } = useReveal<HTMLDListElement>()

  return (
    <section className="section" id="now">
      <SectionHeading eyebrow="Now · what I'm doing this season" title="Now" />
      <dl ref={ref} className={`now-grid reveal reveal-d1${visible ? ' visible' : ''}`}>
        <dt>Recently</dt>
        <dd>
          Completed a web development traineeship at <em>SpeedZone</em> (Zone Media OY): WordPress
          maintenance, client migrations, and technical documentation.
        </dd>

        <dt>Graduated</dt>
        <dd>
          BBA in Business Information Technology from{' '}
          <em>Haaga-Helia University of Applied Sciences</em>, Helsinki, majoring in ICT
          Infrastructures and Cloud Services. Class of 2026.
        </dd>

        <dt>Thesis</dt>
        <dd>
          <em>WordPress Security: Comparison of Security Plugins and Implementation Guide</em>,
          commissioned by SpeedZone.fi and grounded in attack-tree analysis and post-compromise
          cleanup. Graded <em>5 / 5</em>.
        </dd>

        <dt>Building</dt>
        <dd>
          This portfolio, rebuilt in <em>React &amp; TypeScript</em> — component-driven, typed
          project data, same hand-built interactions.
        </dd>

        <dt>Open to</dt>
        <dd>
          Full-stack, front-end and cloud roles in Helsinki, or remote across Finland and the
          Nordics.
        </dd>
      </dl>
    </section>
  )
}
