import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from './SectionHeading'

const LINKS = [
  { label: 'cv.pdf', href: `${import.meta.env.BASE_URL}cv.pdf`, download: true },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/zwe-khant-lwin-948731258/', external: true },
  { label: 'github', href: 'https://github.com/Zwekhant2', external: true },
  { label: '+358 41 576 6171', href: 'tel:+358415766171' },
]

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="scroll-mt-24 py-16 sm:py-20" id="contact">
      <SectionHeading
        eyebrow="contact"
        title="If you are hiring, collaborating, or just curious about one of these projects"
        lede="Write to me — I read everything and reply properly."
      />

      <div ref={ref} className={`reveal reveal-d1 mt-10${visible ? ' visible' : ''}`}>
        <a
          href="mailto:zwekhantlwin5@gmail.com"
          className="inline-block border-b border-accent pb-1 font-mono text-xl text-accent transition-opacity hover:opacity-70 sm:text-2xl"
        >
          zwekhantlwin5@gmail.com
        </a>

        <dl className="mt-12 grid max-w-3xl grid-cols-2 border-t border-l border-line sm:grid-cols-4">
          {LINKS.map((link) => (
            <div key={link.label} className="border-r border-b border-line">
              <a
                href={link.href}
                {...(link.download ? { download: true } : {})}
                {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
                className="block px-4 py-4 transition-colors hover:bg-surface-2"
              >
                <span className="font-mono text-sm text-fg-2">{link.label}</span>
              </a>
            </div>
          ))}
        </dl>

        <p className="mt-6 font-mono text-xs text-fg-3">Vantaa, FI · available from now</p>
      </div>
    </section>
  )
}
