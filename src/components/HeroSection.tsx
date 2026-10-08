import { motion } from 'framer-motion'
import { usePortfolio } from '../hooks/usePortfolio'
import { Navbar } from './Navbar'
import { SocialLinks } from './SocialLinks'

export function HeroSection() {
  const { profile } = usePortfolio()

  return (
    <section id="home" className="relative min-h-svh overflow-hidden">
      <div className="mx-auto grid min-h-svh max-w-6xl grid-rows-[auto_auto_minmax(180px,1fr)_auto_auto] px-4 pb-10 sm:px-6">
        <div className="col-span-full -mx-4 sm:-mx-6">
          <Navbar />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="self-end pt-6 text-center text-sm tracking-[0.25em] text-[#8b9199]"
        >
          {profile.role.toUpperCase()}
        </motion.p>

        {/* Headline row — avatar spans this + next row for the burst-through effect */}
        <div className="relative z-0 flex items-center justify-center overflow-hidden">
          <h1
            className="hero-heading whitespace-nowrap text-center font-semibold leading-none"
            style={{ fontSize: 'clamp(3rem, 13vw, 14rem)' }}
          >
            Hi, I&apos;m {profile.shortName}
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10 -mt-[clamp(5rem,18vw,12rem)] flex justify-center self-start"
        >
          <img
            src={profile.avatarSvg}
            alt={`${profile.name} avatar`}
            className="pointer-events-none h-[clamp(220px,42vw,420px)] w-auto select-none object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
          />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center gap-6 pb-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-w-2xl text-center text-base text-[#c9ced6] sm:text-lg"
            style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <SocialLinks social={profile.social} variant="pills" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
