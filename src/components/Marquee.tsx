import { Fragment } from 'react'
import { skills } from '../data/skills'

function MarqueeCell({ hidden }: { hidden?: boolean }) {
  return (
    <span className="marquee-cell" aria-hidden={hidden ? 'true' : undefined}>
      {skills.map((skill) => (
        <Fragment key={skill}>
          {skill} <span className="m-dot">✦</span>{' '}
        </Fragment>
      ))}
    </span>
  )
}

export function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeCell />
        <MarqueeCell hidden />
      </div>
    </div>
  )
}
