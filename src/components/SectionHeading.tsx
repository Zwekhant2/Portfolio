import { useReveal } from '../hooks/useReveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  lede?: string
}

export function SectionHeading({ eyebrow, title, lede }: SectionHeadingProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={`reveal${visible ? ' visible' : ''}`}>
      <p className="label">
        <span className="text-accent">/</span> {eyebrow}
      </p>
      <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        {title}
      </h2>
      {lede ? <p className="mt-3 max-w-2xl leading-relaxed text-fg-2">{lede}</p> : null}
    </div>
  )
}
