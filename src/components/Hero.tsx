import { useCountUp } from '../hooks/useCountUp'
import { RotatingBadge } from './RotatingBadge'

const TRUST = ['SpeedZone', 'Haaga-Helia', 'AWS Academy', 'Moodle']

export function Hero() {
  const projectsCount = useCountUp(4, true)
  const yearsCount = useCountUp(2, true)

  return (
    <div className="wrap">
      <section className="hero-v2">
        <div className="hero-v2-head">
          <p className="hero-v2-eyebrow fade fade-1">👋 Hei, I'm Zwe and I'm a</p>
          <div className="fade fade-1">
            <RotatingBadge />
          </div>
        </div>

        <div className="hero-v2-type fade fade-2">
          <h1 className="display-fill">Web developer</h1>
          <div className="hero-v2-line2">
            <h1 className="display-outline">&amp; designer</h1>
          </div>
          <img className="hero-v2-photo" src={`${import.meta.env.BASE_URL}photo.jpg`} alt="Zwe Khant Lwin" />
        </div>

        <p className="hero-v2-sub fade fade-3">
          Helsinki-based IT graduate with a hands-on approach — I build and maintain websites,
          configure networks and Linux systems, and deploy cloud infrastructure from DNS and
          cabling to AWS CloudFormation.
        </p>

        <div className="hero-v2-stats fade fade-3">
          <span>
            <strong>{projectsCount}</strong> projects
          </span>
          <span>
            <strong className="accent">5 / 5</strong> thesis grade
          </span>
          <span>
            <strong>{yearsCount}+</strong> years coding
          </span>
        </div>

        <div className="hero-v2-ctas fade fade-4">
          <a className="pill pill-solid" href="#contact">
            Need a developer →
          </a>
          <a className="pill pill-outline" href="#work">
            See my work
          </a>
        </div>

        <div className="hero-v2-trust fade fade-5">
          <span className="trust-label">Worked with</span>
          {TRUST.map((name, i) => (
            <span key={name}>
              {i > 0 && <span className="trust-sep">✦</span>}
              <span className="trust-item">{name}</span>
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
