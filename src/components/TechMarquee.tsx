import { marqueeStack } from '../data/stack'

export function TechMarquee() {
  // The track is duplicated so the -50% scroll lands exactly on a seam.
  const lane = [...marqueeStack, ...marqueeStack]

  return (
    <div className="marquee mt-12 overflow-hidden" aria-label="Technologies I work with">
      <ul className="marquee-track gap-3">
        {lane.map((tech, i) => (
          <li
            key={`${tech}-${i}`}
            aria-hidden={i >= marqueeStack.length}
            className="shrink-0 rounded-lg border border-line bg-surface/70 px-3.5 py-2 text-sm font-medium text-fg-2 backdrop-blur"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}
