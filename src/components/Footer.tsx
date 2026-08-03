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
    <footer className="relative z-10 border-t border-white/[0.08] bg-primary/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="my-10 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_60px_rgba(2,6,23,0.35)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#2b3947] to-[#1a2532] border border-[#c7a56b]/40 flex items-center justify-center font-bold text-sm text-[#f2eadc] shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                  Y
                </div>
                <span className="text-white font-semibold text-lg tracking-tight">
                  Yogesh<span className="text-[#c7a56b]">.</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Designing secure digital experiences with thoughtful product thinking and engineering precision.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-[0.24em] mb-4">Navigate</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1 group"
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
              <h4 className="text-white font-semibold text-sm uppercase tracking-[0.24em] mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-pill w-10 h-10"
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3">
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
