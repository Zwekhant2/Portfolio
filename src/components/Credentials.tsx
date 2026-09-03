import { certifications, education, languages } from '../data/credentials'
import type { Certification } from '../data/credentials'
import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from './SectionHeading'

function CredentialCard({
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
    <div
      ref={ref}
      className={`reveal reveal-d${delay} rounded-2xl border border-line bg-surface p-6 shadow-card${
        visible ? ' visible' : ''
      }`}
    >
      <h3 className="text-sm font-semibold tracking-[0.12em] text-fg-3 uppercase">{heading}</h3>
      <ul className="mt-5 space-y-5">
        {items.map((item) => (
          <li key={item.name} className="flex gap-4">
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-gradient-to-br from-brand to-brand-2" />
            <div className="min-w-0 flex-1">
              <p className="font-medium text-balance">{item.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-fg-2">{item.issuer}</p>
            </div>
            <span className="shrink-0 text-sm font-medium text-fg-3 tabular-nums">{item.year}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Credentials() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="certifications">
      <SectionHeading
        eyebrow="Credentials"
        title="Education, certifications & languages"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
          <CredentialCard heading="Education" items={education} delay={1} />
          <CredentialCard heading="Certifications" items={certifications} delay={2} />
        </div>

        <div
          ref={ref}
          className={`reveal reveal-d3 rounded-2xl border border-line bg-surface p-6 shadow-card${
            visible ? ' visible' : ''
          }`}
        >
          <h3 className="text-sm font-semibold tracking-[0.12em] text-fg-3 uppercase">Languages</h3>
          <ul className="mt-5 space-y-4">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-baseline justify-between gap-4">
                <span className="font-medium">{lang.name}</span>
                <span className="text-sm text-fg-2">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
