import { useScramble } from '../hooks/useScramble'

interface ScrambleTextProps {
  text: string
  active: boolean
}

export function ScrambleText({ text, active }: ScrambleTextProps) {
  const chars = useScramble(text, active)
  return (
    <span className="lbl-text">
      {chars.map((c, i) =>
        c.scrambled ? (
          <span key={i} className="scramble-chr">
            {c.ch}
          </span>
        ) : (
          c.ch
        ),
      )}
    </span>
  )
}
