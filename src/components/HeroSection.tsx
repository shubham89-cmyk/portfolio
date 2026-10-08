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

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col items-center px-4 pb-12 pt-6 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm tracking-[0.25em] text-[#8b9199]"
        >
          {profile.role.toUpperCase()}
        </motion.p>

        <div className="relative mt-4 flex w-full flex-1 flex-col items-center justify-center">
          {/* Stacked composition: greeting clear, name bursts behind transparent avatar */}
          <div className="relative flex w-full max-w-5xl flex-col items-center">
            <p
              className="hero-heading relative z-20 text-center font-medium leading-none"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
            >
              Hi, I&apos;m
            </p>

            <div className="relative mt-1 flex w-full items-center justify-center">
              <h1
                className="hero-heading relative z-0 w-full text-center font-semibold leading-[0.85] tracking-tight"
                style={{ fontSize: 'clamp(3.5rem, 16vw, 13rem)' }}
              >
                {profile.shortName}
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="pointer-events-none absolute bottom-[-8%] left-1/2 z-10 w-[min(52%,340px)] -translate-x-1/2 sm:bottom-[-12%]"
              >
                <AvatarPortrait src={profile.avatarSvg} alt={`${profile.name} avatar`} />
              </motion.div>
            </div>

            {/* Spacer so content below clears the overlapping avatar */}
            <div className="h-[clamp(140px,28vw,260px)]" aria-hidden />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="relative z-20 mt-2 max-w-2xl text-center text-base text-[#c9ced6] sm:text-lg"
            style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="relative z-20 mt-6"
          >
            <SocialLinks social={profile.social} variant="pills" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
