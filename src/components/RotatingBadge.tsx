const LABEL = 'AVAILABLE FOR WORK ✦ HELSINKI, FI ✦ '

export function RotatingBadge() {
  const id = 'badge-circle-path'
  return (
    <a href="#contact" className="rotating-badge" aria-label="Available for work — go to contact">
      <svg viewBox="0 0 120 120" className="rotating-badge-svg">
        <defs>
          <path id={id} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="rotating-badge-text">
          <textPath href={`#${id}`}>{LABEL.repeat(2)}</textPath>
        </text>
      </svg>
      <span className="rotating-badge-arrow" aria-hidden="true">↗</span>
    </a>
  )
}
