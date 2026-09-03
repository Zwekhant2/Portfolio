import { certifications, education, languages } from '../data/credentials'
import type { Certification } from '../data/credentials'
import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from './SectionHeading'

function CredentialTable({
  heading,
  items,
  delay,
}: {
  heading: string
  items: Certification[]
  delay: 1 | 2
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={`reveal reveal-d${delay}${visible ? ' visible' : ''}`}>
      <p className="label border-b border-line pb-3">{heading}</p>
      <dl>
        {items.map((item) => (
          <div key={item.name} className="border-b border-line py-4">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="font-medium text-balance">{item.name}</dt>
              <dd className="shrink-0 font-mono text-xs text-fg-3 tabular-nums">{item.year}</dd>
            </div>
            <dd className="mt-1.5 font-mono text-xs leading-relaxed text-fg-2">{item.issuer}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Credentials() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="scroll-mt-24 border-b border-line py-16 sm:py-20" id="certifications">
      <SectionHeading eyebrow="credentials" title="Education, certifications & languages" />

      <div className="mt-12 grid gap-x-10 gap-y-10 lg:grid-cols-3">
        <div className="lg:col-span-2 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          <CredentialTable heading="education" items={education} delay={1} />
          <CredentialTable heading="certifications" items={certifications} delay={2} />
        </div>

        <div ref={ref} className={`reveal reveal-d3${visible ? ' visible' : ''}`}>
          <p className="label border-b border-line pb-3">languages</p>
          <dl>
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-baseline justify-between gap-4 border-b border-line py-4"
              >
                <dt className="font-medium">{lang.name}</dt>
                <dd className="font-mono text-xs text-fg-3">{lang.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
