import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function WorkSection() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="work">
      <SectionHeading
        eyebrow="Selected work"
        title={`${projects.length} things I built, and what went wrong in them`}
        lede="Each one is written up properly — the decisions, the trade-offs, and the parts that did not go to plan."
      />
      {/* Bento: the first card runs double width, so the grid reads as a
          composition rather than a row of identical tiles. */}
      <div className="mt-14 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            delay={((i % 3) + 1) as 1 | 2 | 3}
            featured={i === 0}
          />
        ))}
      </div>
    </section>
  )
}
