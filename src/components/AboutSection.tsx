import { motion } from 'framer-motion'
import { usePortfolio } from '../hooks/usePortfolio'

export function AboutSection() {
  const { profile } = usePortfolio()

  return (
    <section id="about" className="border-t border-[#1a1a1a] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 md:grid-cols-[1fr_2fr]"
        >
          <div>
            <p className="text-xs tracking-[0.25em] text-[#8b9199]">ABOUT</p>
            <h2 className="hero-heading mt-3 text-4xl font-semibold sm:text-5xl">Who I am</h2>
            <p className="mt-4 text-sm text-[#8b9199]">
              {profile.yearsOfExperience} years · {profile.location}
            </p>
          </div>

          <p
            className="text-lg leading-relaxed text-[#d5d9e0] sm:text-xl"
            style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
          >
            {profile.bio}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
