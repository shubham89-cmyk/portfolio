import { motion } from 'framer-motion'
import { usePortfolio } from '../hooks/usePortfolio'

export function ExperienceSection() {
  const { experience } = usePortfolio()

  return (
    <section id="experience" className="border-t border-[#1a1a1a] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-xs tracking-[0.25em] text-[#8b9199]">EXPERIENCE</p>
          <h2 className="hero-heading mt-3 text-4xl font-semibold sm:text-5xl">Where I&apos;ve worked</h2>
        </div>

        <div className="divide-y divide-[#222]">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="grid gap-4 py-10 md:grid-cols-[88px_1fr]"
            >
              <p className="font-mono text-sm text-[#8b9199]">
                {String(index + 1).padStart(2, '0')}
              </p>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-medium text-white sm:text-2xl">
                    {job.company} — {job.role}
                  </h3>
                  <span className="rounded-full border border-[#2a2a2a] bg-[#141414] px-3 py-1 font-mono text-xs text-[#c9ced6]">
                    {job.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#8b9199]">{job.location}</p>
                <p
                  className="mt-4 text-base text-[#c9ced6]"
                  style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
                >
                  {job.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-[#aeb4bd]"
                      style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
                    >
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
