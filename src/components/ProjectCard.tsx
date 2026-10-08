import { ExternalLink } from 'lucide-react'
import type { Project } from '../types/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLink = Boolean(project.link?.trim())

  return (
    <article className="sticky top-24 overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#121212] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[240px] overflow-hidden bg-[#0a0a0a]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full min-h-[240px] items-end bg-gradient-to-br from-[#1a1a1a] via-[#121212] to-[#0c0c0c] p-8">
              <p className="hero-heading text-4xl font-semibold sm:text-5xl">{project.title}</p>
            </div>
          )}
          {project.highlight && (
            <span className="accent-gradient absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium tracking-wide text-white">
              HIGHLIGHTED
            </span>
          )}
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="font-mono text-sm text-[#8b9199]">
              {String(index + 1).padStart(2, '0')} · {project.year}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
            <p className="mt-1 text-sm text-[#8b9199]">{project.subtitle}</p>
            <p
              className="mt-4 text-base leading-relaxed text-[#c9ced6]"
              style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
            >
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#2a2a2a] px-3 py-1 text-xs text-[#aeb4bd]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-sm text-[#8b9199]">{project.role}</p>
            {hasLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white"
              >
                LIVE PROJECT
                <ExternalLink size={14} aria-hidden />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
