import { projects } from '../data/projects'
import { ProjectRow } from './ProjectRow'
import { SectionHeading } from './SectionHeading'

export function WorkSection() {
  return (
    <section className="section" id="work">
      <SectionHeading eyebrow="Selected work" title="Five things I built, and what went wrong in them" />
      <div className="entry-list">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
