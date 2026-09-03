import { capabilities } from '../data/capabilities'
import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from './SectionHeading'

// One icon per capability column, in data order.
const ICONS = [
  <path key="a" d="M3 8h18M7 4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z" />,
  <path key="b" d="M7 18a4 4 0 0 1-.6-7.96 5.5 5.5 0 0 1 10.7-1.62A4.25 4.25 0 0 1 17.5 18H7Z" />,
  <path key="c" d="M12 3v4m0 10v4M3 12h4m10 0h4M6.3 6.3l2.9 2.9m5.6 5.6 2.9 2.9m0-11.4-2.9 2.9m-5.6 5.6-2.9 2.9" />,
]

function CapCard({ title, items, index }: { title: string; items: string[]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const delay = (index % 3) + 1

  // The reveal lives on a wrapper: on the card itself its transition would
  // collide with the card's own hover transition.
  return (
    <div ref={ref} className={`reveal reveal-d${delay} h-full${visible ? ' visible' : ''}`}>
      <div className="card-sheen h-full rounded-2xl border border-line bg-surface p-6 shadow-card transition-shadow duration-300 hover:shadow-lift">
        <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-glow">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {ICONS[index % ICONS.length]}
          </svg>
        </span>

        <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>

        <ul className="mt-4 space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-fg-2">
              <svg
                viewBox="0 0 24 24"
                className="mt-0.5 size-4 shrink-0 text-brand"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="m5 13 4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Capabilities() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="capabilities">
      <SectionHeading
        eyebrow="Capabilities"
        title="What I can do for you"
        lede="From the browser down to the VLAN — the full path a request takes."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((col, i) => (
          <CapCard key={col.title} title={col.title} items={col.items} index={i} />
        ))}
      </div>
    </section>
  )
}
