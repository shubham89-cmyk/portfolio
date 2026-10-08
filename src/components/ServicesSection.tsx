import { motion } from 'framer-motion'
import { usePortfolio } from '../hooks/usePortfolio'

// TODO: move services rows into portfolio.json later
const services = [
  {
    title: 'Mobile',
    description:
      'React Native apps for iOS and Android — App Store / Play Store shipping, push notifications, deep linking, and smooth Reanimated UX.',
  },
  {
    title: 'Frontend – Web',
    description:
      'Angular and React.js dashboards and product UIs with TypeScript, Tailwind/SCSS, and state that stays fast under real usage.',
  },
  {
    title: 'Backend & Realtime',
    description:
      'Node.js / Express APIs, GraphQL, WebSocket chat, Firebase Auth/Firestore/FCM, and payment / OAuth integrations.',
  },
  {
    title: 'Cloud & Delivery',
    description:
      'AWS Certified Solutions Architect patterns, CI/CD, Agile leadership, code reviews, and remote-first delivery for UK / US / EU teams.',
  },
]

export function ServicesSection() {
  const { skills } = usePortfolio()

  return (
    <section id="skills" className="border-t border-[#1a1a1a] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-xs tracking-[0.25em] text-[#8b9199]">SERVICES</p>
          <h2 className="hero-heading mt-3 text-4xl font-semibold sm:text-5xl">What I bring</h2>
        </div>

        <div className="divide-y divide-[#222]">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
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
                <h3 className="text-xl font-medium text-white sm:text-2xl">{service.title}</h3>
                <p
                  className="mt-3 max-w-3xl text-base text-[#c9ced6]"
                  style={{ wordBreak: 'normal', overflowWrap: 'normal' }}
                >
                  {service.description}
                </p>
                {skills.categories[index] && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.categories[index].items.slice(0, 6).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#2a2a2a] px-3 py-1 text-xs text-[#aeb4bd]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
