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

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col items-center px-4 pb-10 pt-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-center text-sm tracking-[0.25em] text-[#8b9199]"
        >
          {profile.role.toUpperCase()}
        </motion.p>

        {/* Single composition: name stays readable; avatar bursts through the midline */}
        <div className="relative mt-2 flex w-full flex-1 flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center">
            <h1
              className="hero-heading relative z-0 whitespace-nowrap text-center font-semibold leading-[0.9]"
              style={{ fontSize: 'clamp(2.75rem, 12vw, 12rem)' }}
            >
              Hi, I&apos;m {profile.shortName}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative z-10 -mt-[clamp(3.5rem,11vw,7.5rem)]"
            >
              <AvatarPortrait src={profile.avatarSvg} alt={`${profile.name} avatar`} />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative z-10 mt-2 max-w-2xl text-center text-base text-[#c9ced6] sm:mt-4 sm:text-lg"
            style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="relative z-10 mt-6"
          >
            <SocialLinks social={profile.social} variant="pills" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
