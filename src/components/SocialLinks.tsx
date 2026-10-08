import { Github, Instagram, Linkedin, Globe, Mail, Phone } from 'lucide-react'
import type { SocialLinks as SocialLinksType } from '../types/portfolio'

interface SocialLinksProps {
  social: SocialLinksType
  variant?: 'pills' | 'icons' | 'footer'
  className?: string
  /** When true, hide email/phone (useful in footer next to explicit contact rows). */
  networksOnly?: boolean
}

const items = [
  { key: 'github' as const, label: 'GitHub', Icon: Github },
  { key: 'linkedin' as const, label: 'LinkedIn', Icon: Linkedin },
  { key: 'instagram' as const, label: 'Instagram', Icon: Instagram },
  { key: 'website' as const, label: 'Website', Icon: Globe },
  { key: 'email' as const, label: 'Email', Icon: Mail, href: (v: string) => `mailto:${v}` },
  { key: 'phone' as const, label: 'Phone', Icon: Phone, href: (v: string) => `tel:${v.replace(/\s/g, '')}` },
]

export function SocialLinks({
  social,
  variant = 'pills',
  className = '',
  networksOnly = false,
}: SocialLinksProps) {
  const links = items
    .map((item) => {
      if (networksOnly && (item.key === 'email' || item.key === 'phone')) return null
      const value = social[item.key]
      if (!value?.trim()) return null
      const href = item.href ? item.href(value) : value
      return { ...item, href, value }
    })
    .filter(Boolean) as Array<{
    key: keyof SocialLinksType
    label: string
    Icon: typeof Github
    href: string
    value: string
  }>

  if (links.length === 0) return null

  if (variant === 'pills') {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
        {links.map(({ key, label, Icon, href }) => (
          <a
            key={key}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#141414] px-4 py-2 text-sm text-[#c9ced6] transition hover:border-[#4b5563] hover:text-white"
          >
            <Icon size={16} aria-hidden />
            {label}
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map(({ key, label, Icon, href }) => (
        <a
          key={key}
          href={href}
          aria-label={label}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2a2a] text-[#c9ced6] transition hover:border-[#4b5563] hover:text-white"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
