import { useReveal } from '../hooks/useReveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  lede?: string
}

export function SectionHeading({ eyebrow, title, lede }: SectionHeadingProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={`reveal mx-auto max-w-2xl text-center${visible ? ' visible' : ''}`}>
      <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {lede ? <p className="mt-4 text-base leading-relaxed text-fg-2">{lede}</p> : null}
    </div>
  )
}
