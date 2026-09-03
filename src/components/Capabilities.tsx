import { capabilities } from '../data/capabilities'
import { useReveal } from '../hooks/useReveal'
import { SectionHeading } from './SectionHeading'

function CapColumn({ title, items, index }: { title: string; items: string[]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const delay = (index % 3) + 1

  return (
    <div ref={ref} className={`reveal reveal-d${delay}${visible ? ' visible' : ''}`}>
      <p className="label border-b border-line pb-3">
        <span className="text-accent tabular-nums">{String(index + 1).padStart(2, '0')}</span>{' '}
        {title}
      </p>
      <ul className="mt-4 space-y-2 font-mono text-sm text-fg-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-fg-3 select-none">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Capabilities() {
  return (
    <section className="scroll-mt-24 border-b border-line py-16 sm:py-20" id="capabilities">
      <SectionHeading
        eyebrow="skills"
        title="What I can do for you"
        lede="From the browser down to the VLAN — the full path a request takes."
      />
      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((col, i) => (
          <CapColumn key={col.title} title={col.title} items={col.items} index={i} />
        ))}
      </div>
    </section>
  )
}
