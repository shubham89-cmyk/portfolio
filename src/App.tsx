import { AboutSection } from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ServicesSection } from './components/ServicesSection'
import { TestimonialsSection } from './components/TestimonialsSection'

function App() {
  return (
    <main className="bg-[#0C0C0C] text-white">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}

export default App
