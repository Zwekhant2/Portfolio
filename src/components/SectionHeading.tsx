import { useReveal } from '../hooks/useReveal'
import { ScrambleText } from './ScrambleText'

interface SectionHeadingProps {
  eyebrow: string
  title: string
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`section-heading reveal${visible ? ' visible' : ''}`}>
      <p className="section-label">
        <span className="lbl-star" aria-hidden="true">
          ✦
        </span>
        <ScrambleText text={eyebrow} active={visible} />
      </p>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}
