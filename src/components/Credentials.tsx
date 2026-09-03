import { certifications, education, languages } from '../data/credentials'
import type { Certification } from '../data/credentials'
import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from './SectionHeading'

function CredentialList({ items }: { items: Certification[] }) {
  return (
    <div className="credentials-list">
      {items.map((item) => (
        <div className="credentials-row" key={item.name}>
          <div>
            <div className="cred-cert-name">{item.name}</div>
            <div className="cred-cert-sub">{item.issuer}</div>
          </div>
          <div className="cred-cert-year">{item.year}</div>
        </div>
      ))}
    </div>
  )
}

export function Credentials() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="certifications">
      <SectionHeading
        eyebrow="Credentials · education, certifications & languages"
        title="Credentials"
      />
      <div ref={ref} className={`credentials-grid reveal reveal-d1${visible ? ' visible' : ''}`}>
        <div>
          <h4 className="credentials-heading">Education</h4>
          <CredentialList items={education} />

          <h4 className="credentials-heading credentials-heading--stacked">Certifications</h4>
          <CredentialList items={certifications} />
        </div>

        <div>
          <h4 className="credentials-heading">Languages</h4>
          <div className="credentials-list">
            {languages.map((lang) => (
              <div className="credentials-row credentials-row--tight" key={lang.name}>
                <span className="cred-lang-name">{lang.name}</span>
                <span className="cred-lang-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
