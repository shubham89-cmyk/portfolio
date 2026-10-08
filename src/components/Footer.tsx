import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'
import { SocialLinks } from './SocialLinks'

const navigateLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const { profile } = usePortfolio()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    if (!profile.social.email) return
    try {
      await navigator.clipboard.writeText(profile.social.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <footer id="contact" className="border-t border-[#1a1a1a] pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="hero-heading text-3xl font-semibold">{profile.name}</p>
          <p className="mt-3 text-sm text-[#c9ced6]">{profile.specialization}</p>
          <p className="mt-2 text-sm text-[#8b9199]">{profile.location}</p>
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] text-[#8b9199]">NAVIGATE</p>
          <ul className="mt-4 space-y-3">
            {navigateLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[#c9ced6] transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] text-[#8b9199]">REACH OUT</p>
          <div className="mt-4 space-y-3">
            {profile.social.email && (
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${profile.social.email}`}
                  className="text-[#c9ced6] transition hover:text-white"
                >
                  {profile.social.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#2a2a2a] text-[#c9ced6] transition hover:text-white"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            )}
            {profile.social.phone && (
              <a
                href={`tel:${profile.social.phone.replace(/\s/g, '')}`}
                className="block text-[#c9ced6] transition hover:text-white"
              >
                {profile.social.phone}
              </a>
            )}
            <SocialLinks
              social={profile.social}
              variant="icons"
              networksOnly
              className="pt-2"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-[#8b9199] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with React · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
