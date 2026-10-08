import { motion } from 'framer-motion'

// TODO: move services rows into portfolio.json later
const services = [
  {
    title: 'Backend',
    description:
      'Node.js / Express APIs, GraphQL, WebSocket realtime, Firebase, OAuth, and payment integrations that stay reliable under load.',
  },
  {
    title: 'AI/LLM',
    description:
      'AI-driven product features — recommendation APIs, intelligent workflows, and practical LLM integrations wired into real apps.',
  },
  {
    title: 'Frontend',
    description:
      'React Native, React.js, and Angular UIs with TypeScript, Redux / NgRx, Tailwind/SCSS, and clean, performant component systems.',
  },
  {
    title: 'Cloud',
    description:
      'AWS Certified Solutions Architect delivery — CI/CD, Firebase, App Store / Play Store shipping, and remote-first cloud ops.',
  },
]

export function ServicesSection() {
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
