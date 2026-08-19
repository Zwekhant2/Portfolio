import { useReveal } from '../hooks/useReveal'
import { ScrambleText } from './ScrambleText'

interface SectionLabelProps {
  text: string
}

export function SectionLabel({ text }: SectionLabelProps) {
  const { ref, visible } = useReveal<HTMLParagraphElement>()
  return (
    <p ref={ref} className={`section-label reveal${visible ? ' visible' : ''}`}>
      <span className="lbl-star" aria-hidden="true">✦</span>
      <ScrambleText text={text} active={visible} />
    </p>
  )
}
