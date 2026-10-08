import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import { useEffect } from 'react'

interface AvatarPortraitProps {
  src: string
  alt: string
}

/**
 * Cursor-following avatar with layered parallax:
 * head slow, face medium — tracking feels alive without whole-block “security camera” motion.
 * Respects prefers-reduced-motion.
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
      faceX.set(nx * 16)
      faceY.set(ny * 12)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [faceX, faceY, headX, headY])

  const headTransform = useMotionTemplate`translate3d(${headX}px, ${headY}px, 0)`
  const faceTransform = useMotionTemplate`translate3d(${faceX}px, ${faceY}px, 0) scale(1.02)`

  return (
    <motion.div
      className="relative h-[clamp(220px,42vw,420px)] w-[clamp(180px,34vw,340px)] overflow-hidden"
      style={{ transform: headTransform }}
    >
      <motion.img
        src={src}
        alt={alt}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
        style={{ transform: faceTransform }}
      />
    </motion.div>
  )
}

export default AvatarPortrait
