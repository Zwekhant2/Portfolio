import { useEffect, useRef } from 'react'

export function useViewTransitionName<T extends HTMLElement>(name: string) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    ref.current?.style.setProperty('view-transition-name', name)
  }, [name])

  return ref
}
