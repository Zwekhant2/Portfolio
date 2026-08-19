import { useCountUp } from '../hooks/useCountUp'

export function Hero() {
  const projectsCount = useCountUp(4, true)
  const yearsCount = useCountUp(2, true)

  return (
    <div className="wrap">
      <section className="hero">
        <div className="hero-inner">
          <div>
            <h1 className="fade fade-1">
              Web developer
              <br />
              &amp; <span className="ital">designer,</span>
              <br />
              I build, ship,
              <br />
              &amp; <span className="accent">maintain</span>.
            </h1>
            <p className="hero-sub fade fade-2">
              Helsinki-based IT graduate with a hands-on approach. I build and maintain websites,
              configure networks and Linux systems, and deploy cloud infrastructure from DNS and
              cabling to AWS CloudFormation. Recently graduated with a BBA from{' '}
              <a href="https://www.haaga-helia.fi/en" target="_blank" rel="noopener">
                Haaga-Helia
              </a>{' '}
              and completed a traineeship at{' '}
              <a href="https://speedzone.fi" target="_blank" rel="noopener">
                SpeedZone
              </a>
              .
            </p>
            <div className="hero-meta fade fade-3">
              <span>
                Education
                <strong>BBA Graduate, Haaga-Helia</strong>
              </span>
              <span>
                Experience
                <strong>Web Dev, SpeedZone</strong>
              </span>
              <span>
                Thesis
                <strong>Grade 5 · WP Security</strong>
              </span>
            </div>
            <div className="hero-stats fade fade-4">
              <div className="stat">
                <span className="stat-num">{projectsCount}</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-num">
                  <span className="stat-suffix">5 / 5</span>
                </span>
                <span className="stat-label">Thesis grade</span>
              </div>
              <div className="stat">
                <span className="stat-num">{yearsCount}</span>
                <span className="stat-num" style={{ fontSize: 24, color: 'var(--accent)', fontStyle: 'italic' }}>
                  +
                </span>
                <span className="stat-label">Years coding</span>
              </div>
            </div>
            <div className="scroll-hint fade fade-5" aria-hidden="true">
              <div className="scroll-line"></div>
              Scroll to explore
            </div>
          </div>

          <div className="hero-photo-wrap fade fade-2">
            <img className="hero-photo" src={`${import.meta.env.BASE_URL}photo.jpg`} alt="Zwe Khant Lwin" />
            <p className="hero-photo-label">Zwe Khant Lwin · Vantaa, FI</p>
          </div>
        </div>
      </section>
    </div>
  )
}
