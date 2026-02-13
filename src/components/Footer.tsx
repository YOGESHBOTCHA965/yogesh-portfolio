'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/skills', label: 'Skills' },
    { href: '/about', label: 'About Me' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/yogeshbotcha', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/yogcha', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:yogeshbotcha@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-primary/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-xs text-white">
                Y
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Yogesh<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Web developer &amp; cybersecurity professional building secure, resilient digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {currentYear} Yogesh. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Designed and built with Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
