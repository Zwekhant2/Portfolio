import { projects } from '../data/projects'
import { ProjectRow } from './ProjectRow'
import { SectionHeading } from './SectionHeading'

export function WorkSection() {
  return (
    <section className="scroll-mt-24 border-b border-line py-16 sm:py-20" id="work">
      <SectionHeading
        eyebrow="work"
        title={`${projects.length} things I built, and what went wrong in them`}
        lede="Each one is written up properly — the decisions, the trade-offs, and the parts that did not go to plan."
      />
      <div className="mt-12 border-t border-line">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
