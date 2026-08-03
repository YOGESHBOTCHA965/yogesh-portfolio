'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/education', label: 'Education' },
    { href: '/skills', label: 'Skills' },
    { href: '/about', label: 'About Me' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#2b3947] to-[#1a2532] border border-[#c7a56b]/40 flex items-center justify-center font-bold text-sm text-[#f2eadc] shadow-[0_0_20px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:scale-105">
              Y
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block tracking-tight">
              Yogesh
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-white bg-[#c7a56b]/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#c7a56b] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-xl hover:bg-white/[0.04]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-primary/95 backdrop-blur-xl border-t border-white/[0.06] px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                pathname === link.href
                  ? 'text-[#dec69a] bg-[#c7a56b]/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
