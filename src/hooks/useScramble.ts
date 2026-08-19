import { useEffect, useRef, useState } from 'react'

const CHARS = '!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789·'

interface QueueItem {
  ch: string
  start: number
  end: number
  cur: string
}

export function useScramble(text: string, active: boolean) {
  const [display, setDisplay] = useState<{ ch: string; scrambled: boolean }[]>(
    text.split('').map((ch) => ({ ch, scrambled: false })),
  )
  const started = useRef(false)

  useEffect(() => {
    if (!active || started.current) return
    started.current = true

    const len = text.length
    const queue: QueueItem[] = []
    for (let i = 0; i < len; i++) {
      const start = Math.floor(Math.random() * 10)
      queue.push({ ch: text[i], start, end: start + Math.floor(Math.random() * 12), cur: '' })
    }
    let frame = 0
    let raf: number

    function tick() {
      let done = 0
      const next = queue.map((q) => {
        if (frame >= q.end) {
          done++
          return { ch: q.ch, scrambled: false }
        }
        if (frame >= q.start) {
          if (!q.cur || Math.random() < 0.3) q.cur = CHARS[Math.floor(Math.random() * CHARS.length)]
          return { ch: q.cur, scrambled: true }
        }
        return { ch: q.ch, scrambled: false }
      })
      setDisplay(next)
      if (done < len) {
        frame++
        raf = requestAnimationFrame(tick)
      }
    }
    tick()
    return () => cancelAnimationFrame(raf)
  }, [active, text])

  return display
}
