import { capabilities } from '../data/capabilities'
import { useReveal } from '../hooks/useReveal'
import { SectionLabel } from './SectionLabel'

function CapColumn({ title, items, delay }: { title: string; items: string[]; delay: 1 | 2 | 3 }) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`cap-col reveal reveal-d${delay}${visible ? ' visible' : ''}`}>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item} <span className="cap-pip"></span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <SectionLabel text="Capabilities · what I can do for you" />
      <div className="cap-grid">
        {capabilities.map((col, i) => (
          <CapColumn key={col.title} title={col.title} items={col.items} delay={((i % 3) + 1) as 1 | 2 | 3} />
        ))}
      </div>
    </section>
  )
}
