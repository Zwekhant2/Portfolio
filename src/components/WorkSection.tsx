import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionLabel } from './SectionLabel'

export function WorkSection() {
  return (
    <section className="section" id="work">
      <SectionLabel text={`Selected work · 0${projects.length} projects`} />
      <div className="work-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} />
        ))}
      </div>
    </section>
  )
}
