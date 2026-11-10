'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { resumeUrl } from '@/data/site'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/education', label: 'Education' },
    { href: '/skills', label: 'Skills' },
    { href: '/about', label: 'About' },
  ]

  const isActive = (href: string) => pathname === href || pathname === `${href}/`

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-200 ease-out ${
        scrolled || isOpen ? 'bg-ink-900/95 backdrop-blur-md border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-base font-medium text-fg">
            Yogesh Botcha
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`h-8 px-3 inline-flex items-center rounded-md text-sm transition-colors duration-150 ease-out ${
                  isActive(link.href)
                    ? 'bg-ink-800 text-fg'
                    : 'text-fg-2 hover:text-fg'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 px-3 inline-flex items-center rounded-md text-sm text-fg-2 hover:text-fg transition-colors duration-150 ease-out"
            >
              Resume
            </a>
            <Link
              href="/contact"
              className="ml-3 h-8 px-3 inline-flex items-center rounded-md text-sm font-medium bg-fg text-ink-900 hover:bg-white transition-colors duration-150 ease-out"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 inline-flex items-center justify-center rounded-md text-fg-2 hover:text-fg hover:bg-ink-800 transition-colors duration-150 ease-out"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-line animate-rise">
          <div className="container-page py-3 flex flex-col gap-1">
            {[...navLinks, { href: '/contact', label: 'Contact' }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`h-10 px-3 flex items-center rounded-md text-sm transition-colors duration-150 ease-out ${
                  isActive(link.href) ? 'bg-ink-800 text-fg' : 'text-fg-2 hover:text-fg'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-3 flex items-center rounded-md text-sm text-fg-2 hover:text-fg transition-colors duration-150 ease-out"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
