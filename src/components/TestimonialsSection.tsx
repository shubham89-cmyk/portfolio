import { MessageCircle, Quote, Sparkles, Star } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'

const decorations = [Sparkles, Quote, Star, MessageCircle]

export function TestimonialsSection() {
  const { testimonials } = usePortfolio()

  if (testimonials.length === 0) return null

  const loop = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="overflow-hidden border-t border-[#1a1a1a] bg-[#090909] py-24">
      <div className="mx-auto mb-12 max-w-6xl px-4 sm:px-6">
        <p className="text-xs tracking-[0.25em] text-[#8b9199]">TESTIMONIALS</p>
        <h2 className="hero-heading mt-3 text-4xl font-semibold sm:text-5xl">Kind words</h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#090909] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#090909] to-transparent sm:w-28" />

        <div className="marquee-track gap-4 px-4">
          {loop.map((item, index) => {
            const Icon = decorations[index % decorations.length]
            return (
              <article
                key={`${item.id}-${index}`}
                className="w-[320px] shrink-0 rounded-2xl border border-[#2a2a2a] bg-[#121212] p-6 sm:w-[380px]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: item.avatarColor }}
                    aria-hidden
                  >
                    {item.name.charAt(0)}
                  </div>
                  <Icon className="text-[#4b5563]" size={20} aria-hidden />
                </div>
                <p
                  className="min-h-[96px] text-base italic leading-relaxed text-[#d5d9e0]"
                  style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
                >
                  “{item.quote}”
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-[#8b9199]">{item.role}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
