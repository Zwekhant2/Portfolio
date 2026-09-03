import { useReveal } from '../hooks/useReveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`section-heading reveal${visible ? ' visible' : ''}`}>
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}
