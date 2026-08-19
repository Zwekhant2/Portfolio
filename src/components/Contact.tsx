import { useReveal } from '../hooks/useReveal'
import { useMagnetic } from '../hooks/useMagnetic'
import { SectionLabel } from './SectionLabel'

export function Contact() {
  const { ref: revealRef, visible } = useReveal<HTMLElement>()
  const { ref: magRef, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>()

  return (
    <section ref={revealRef} className="section" id="contact">
      <SectionLabel text="Contact · let's build something" />
      <h2 className={`contact-headline reveal reveal-d1${visible ? ' visible' : ''}`}>
        If you're hiring, collaborating, or just <span className="ital">curious,</span> say hello.
      </h2>
      <a
        ref={magRef}
        className={`contact-mail reveal reveal-d2${visible ? ' visible' : ''}`}
        href="mailto:zwekhantlwin5@gmail.com"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        zwekhantlwin5@gmail.com →
      </a>
      <div className={`reveal reveal-d2${visible ? ' visible' : ''}`} style={{ marginTop: 20 }}>
        <a className="cv-btn" href={`${import.meta.env.BASE_URL}cv.pdf`} download aria-label="Download CV as PDF">
          Download CV ↓
        </a>
      </div>
      <div className={`contact-links reveal reveal-d3${visible ? ' visible' : ''}`}>
        <a href="https://www.linkedin.com/in/zwe-khant-lwin-948731258/" target="_blank" rel="noopener">
          LinkedIn ↗
        </a>
        <a href="https://github.com/Zwekhant2" target="_blank" rel="noopener">
          GitHub ↗
        </a>
        <a href="tel:+358415766171">+358 41 576 6171</a>
        <span>Vantaa, FI · UTC+3</span>
      </div>
    </section>
  )
}
