import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import { useEffect } from 'react'

interface AvatarPortraitProps {
  src: string
  alt: string
}

/**
 * Cursor-following avatar with layered parallax.
 * Transparent PNG so the chrome headline stays readable around the character.
 */
export function AvatarPortrait({ src, alt }: AvatarPortraitProps) {
  const headX = useSpring(0, { stiffness: 55, damping: 18, mass: 0.85 })
  const headY = useSpring(0, { stiffness: 55, damping: 18, mass: 0.85 })
  const faceX = useSpring(0, { stiffness: 110, damping: 16, mass: 0.55 })
  const faceY = useSpring(0, { stiffness: 110, damping: 16, mass: 0.55 })

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const onMove = (event: MouseEvent) => {
      if (reduceMotion.matches) {
        headX.set(0)
        headY.set(0)
        faceX.set(0)
        faceY.set(0)
        return
      }

      const nx = (event.clientX / window.innerWidth - 0.5) * 2
      const ny = (event.clientY / window.innerHeight - 0.5) * 2

      headX.set(nx * 8)
      headY.set(ny * 6)
      faceX.set(nx * 14)
      faceY.set(ny * 10)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [faceX, faceY, headX, headY])

  const headTransform = useMotionTemplate`translate3d(${headX}px, ${headY}px, 0)`
  const faceTransform = useMotionTemplate`translate3d(${faceX}px, ${faceY}px, 0)`

  return (
    <motion.div
      className="relative mx-auto h-[clamp(200px,38vw,380px)] w-[clamp(160px,30vw,300px)]"
      style={{ transform: headTransform }}
    >
      <motion.img
        src={src}
        alt={alt}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain object-bottom drop-shadow-[0_24px_50px_rgba(0,0,0,0.65)]"
        style={{ transform: faceTransform }}
      />
    </motion.div>
  )
}

export default AvatarPortrait
