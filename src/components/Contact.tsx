import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const { ref: revealRef, visible } = useReveal<HTMLElement>()

  return (
    <section ref={revealRef} className="section" id="contact">
      <SectionHeading eyebrow="Contact" title="Say hello" />
      <p className={`contact-headline reveal reveal-d1${visible ? ' visible' : ''}`}>
        If you are hiring, collaborating, or just <em>curious</em> about one of these projects —
        write to me.
      </p>
      <a
        className={`contact-mail reveal reveal-d2${visible ? ' visible' : ''}`}
        href="mailto:zwekhantlwin5@gmail.com"
      >
        zwekhantlwin5@gmail.com
      </a>
      <div className={`contact-links reveal reveal-d3${visible ? ' visible' : ''}`}>
        <a href={`${import.meta.env.BASE_URL}cv.pdf`} download>
          Download CV
        </a>
        <a href="https://www.linkedin.com/in/zwe-khant-lwin-948731258/" target="_blank" rel="noopener">
          LinkedIn
        </a>
        <a href="https://github.com/Zwekhant2" target="_blank" rel="noopener">
          GitHub
        </a>
        <a href="tel:+358415766171">+358 41 576 6171</a>
        <span>Vantaa, FI</span>
      </div>
    </section>
  )
}
