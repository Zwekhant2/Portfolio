import { certifications, languages } from '../data/credentials'
import { useReveal } from '../hooks/useReveal'
import { SectionLabel } from './SectionLabel'

export function Credentials() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="certifications">
      <SectionLabel text="Credentials · certifications & languages" />
      <div ref={ref} className={`credentials-grid reveal reveal-d1${visible ? ' visible' : ''}`}>
        <div>
          <h4 className="credentials-heading">Certifications</h4>
          <div className="credentials-list">
            {certifications.map((cert) => (
              <div className="credentials-row" key={cert.name}>
                <div>
                  <div className="cred-cert-name">{cert.name}</div>
                  <div className="cred-cert-sub">{cert.issuer}</div>
                </div>
                <div className="cred-cert-year">{cert.year}</div>
              </div>
            ))}
          </div>
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
