import { projects } from '../data/projects'
import { useCountUp } from '../hooks/useCountUp'

export function Hero() {
  // Derived, not hardcoded: the counter tracks the work index and cannot drift.
  const projectsCount = useCountUp(projects.length, true)
  const yearsCount = useCountUp(2, true)

  return (
    <div className="wrap">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-kicker">Zwe Khant Lwin — Helsinki</p>

          <h1 className="hero-title">
            I build websites, and I run the servers that keep them online.
          </h1>

          <p className="hero-lede">
            I build web applications with React, TypeScript and C# / .NET, and run them on AWS
            infrastructure I write as code. BBA in Business Information Technology from
            Haaga-Helia, majoring in ICT Infrastructures and Cloud Services.
          </p>

          <p className="hero-lede">
            Below are {projects.length} projects, written up properly — including the parts that
            went wrong.
          </p>

          <dl className="hero-stats">
            <div>
              <dt>Projects</dt>
              <dd>{projectsCount}</dd>
            </div>
            <div>
              <dt>Thesis grade</dt>
              <dd>5 / 5</dd>
            </div>
            <div>
              <dt>Years coding</dt>
              <dd>{yearsCount}+</dd>
            </div>
          </dl>

          <div className="hero-actions">
            <a className="link-underline" href="#work">
              Read the work
            </a>
            <a className="link-underline" href="mailto:zwekhantlwin5@gmail.com">
              zwekhantlwin5@gmail.com
            </a>
          </div>
        </div>

        <figure className="hero-portrait">
          <img src={`${import.meta.env.BASE_URL}photo.jpg`} alt="Zwe Khant Lwin" />
        </figure>
      </section>
    </div>
  )
}
