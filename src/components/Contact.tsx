import { useReveal } from '../hooks/useReveal'

const LINKS = [
  { label: 'Download CV', href: `${import.meta.env.BASE_URL}cv.pdf`, download: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zwe-khant-lwin-948731258/', external: true },
  { label: 'GitHub', href: 'https://github.com/Zwekhant2', external: true },
  { label: '+358 41 576 6171', href: 'tel:+358415766171' },
]

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="contact">
      <div
        ref={ref}
        className={`reveal relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center shadow-lift sm:px-12 sm:py-20${
          visible ? ' visible' : ''
        }`}
      >
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-72 bg-gradient-to-br from-brand/25 via-brand-2/20 to-brand-3/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">Contact</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            If you are hiring, collaborating, or just curious about one of these projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-fg-2">
            Write to me — I read everything and reply properly.
          </p>

          <a
            href="mailto:zwekhantlwin5@gmail.com"
            className="mt-8 inline-block rounded-xl bg-gradient-to-br from-brand to-brand-2 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            zwekhantlwin5@gmail.com
          </a>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.download ? { download: true } : {})}
                  {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
                  className="font-medium text-fg-2 underline decoration-line underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="text-fg-3">Vantaa, FI</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
