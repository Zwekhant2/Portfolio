import { useScrollProgress } from '../hooks/useScrollProgress'

export function ProgressBar() {
  const progress = useScrollProgress()
  return <div id="progress" aria-hidden="true" style={{ width: `${progress}%` }}></div>
}
