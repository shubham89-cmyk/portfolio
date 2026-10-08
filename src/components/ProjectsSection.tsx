import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { usePortfolio } from '../hooks/usePortfolio'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  const { projects } = usePortfolio()

  const sorted = useMemo(
    () => [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight)),
    [projects],
  )

  return (
    <section id="projects" className="border-t border-[#1a1a1a] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-xs tracking-[0.25em] text-[#8b9199]">PROJECTS</p>
          <h2 className="hero-heading mt-3 text-4xl font-semibold sm:text-5xl">Selected work</h2>
        </div>

        <div className="space-y-8 pb-[30vh]">
          {sorted.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
