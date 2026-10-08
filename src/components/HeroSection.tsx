import { motion } from 'framer-motion'
import { usePortfolio } from '../hooks/usePortfolio'
import { AvatarPortrait } from './AvatarPortrait'
import { Navbar } from './Navbar'
import { SocialLinks } from './SocialLinks'

export function HeroSection() {
  const { profile } = usePortfolio()

  return (
    <section id="home" className="relative min-h-svh overflow-hidden">
      <Navbar />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs tracking-[0.28em] text-[#8b9199] sm:text-sm"
        >
          {profile.role.toUpperCase()}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="hero-heading mt-8 text-center font-medium leading-none"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Hi, I&apos;m
        </motion.p>

        <div className="relative mt-2 w-full">
          <h1
            className="hero-heading relative z-0 w-full overflow-hidden text-center font-semibold leading-[0.82] tracking-tight"
            style={{ fontSize: 'clamp(3.25rem, 14vw, 11rem)' }}
          >
            {profile.shortName}
          </h1>

          {/* Sits under the name and only kisses the baseline — not the face or greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative z-10 mx-auto -mt-6 w-[min(168px,44vw)] sm:-mt-16 sm:w-[min(220px,34vw)] lg:-mt-28"
          >
            <AvatarPortrait src={profile.avatarSvg} alt={`${profile.name} avatar`} />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-20 mt-6 max-w-2xl text-center text-base text-[#c9ced6] sm:mt-8 sm:text-lg"
          style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="relative z-20 mt-6"
        >
          <SocialLinks social={profile.social} variant="pills" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
