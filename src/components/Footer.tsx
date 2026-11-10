import Link from 'next/link'
import { resumeUrl } from '@/data/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/skills', label: 'Skills' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { href: resumeUrl, label: 'Resume (PDF)' },
    { href: 'https://github.com/yogeshbotcha', label: 'GitHub' },
    { href: 'https://linkedin.com/in/yogcha', label: 'LinkedIn' },
    { href: 'mailto:yogeshbotcha@gmail.com', label: 'yogeshbotcha@gmail.com' },
  ]

  return (
    <footer className="border-t border-line mt-16">
      <div className="container-page py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="text-base font-medium text-fg">Yogesh Botcha</p>
          <p className="text-sm text-fg-2 mt-2 max-w-xs">
            Software developer in Columbus, Georgia, building secure full-stack and AI applications
          </p>
        </div>

        <ul className="flex flex-col gap-2">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="link text-sm">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="link text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page py-6 border-t border-line flex flex-col sm:flex-row justify-between gap-2">
        <p className="meta">&copy; {currentYear} Yogesh Botcha</p>
        <p className="meta">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}
