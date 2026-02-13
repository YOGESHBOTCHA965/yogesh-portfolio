'use client'

import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail, Code2, Shield, Zap, ChevronDown, Layers, Globe, Server } from 'lucide-react'
import { useEffect, useState } from 'react'

const roles = ['Full-Stack Web Developer', 'Java & Spring Boot Engineer', 'Cybersecurity Analyst', 'Angular Developer', 'Security Enthusiast']

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        )
      }, isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}

export default function Home() {
  const typedText = useTypingEffect(roles)

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-6 sm:px-8 pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium">Available for opportunities</span>
          </div>

          {/* Profile Image Placeholder */}
          <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 p-1 animate-fade-in">
            <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-4xl font-bold text-cyan-400">
              YB
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-up">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Yogesh Botcha
            </span>
          </h1>

          {/* Typing effect */}
          <div className="h-10 sm:h-12 flex items-center justify-center mb-8 animate-fade-up animation-delay-200">
            <span className="text-xl sm:text-2xl text-gray-400 font-mono">
              {'> '}{typedText}
              <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-blink" />
            </span>
          </div>

          {/* Bio */}
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up animation-delay-400">
            M.S. Cybersecurity graduate student at Columbus State University with hands-on experience in
            full-stack web development, Java/Spring Boot/Angular applications, risk assessment, security monitoring,
            and modern frontend engineering. Passionate about building secure, scalable web applications
            while leveraging cybersecurity expertise to deliver resilient solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up animation-delay-600">
            <Link href="/projects" className="btn-primary flex items-center justify-center gap-2 group">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="btn-secondary flex items-center justify-center gap-2">
              <Mail size={18} />
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 animate-fade-up animation-delay-800">
            {[
              { icon: <Github size={18} />, href: 'https://github.com/yogeshbotcha', label: 'GitHub' },
              { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/yogcha', label: 'LinkedIn' },
              { icon: <Mail size={18} />, href: 'mailto:yogeshbotcha@gmail.com', label: 'Email' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown size={20} className="text-gray-600" />
        </div>
      </section>

      {/* NCL Achievement Banner */}
      <section className="section-container pb-8">
        <div className="card-glass relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Shield size={36} className="text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-amber-400 text-xs font-mono tracking-wider uppercase mb-1">National Cyber League - Fall 2025 Team Game</p>
              <h3 className="text-2xl font-bold text-white mb-1">Ranked 67th out of 4,214 - 99th Percentile</h3>
              <p className="text-gray-400 text-sm">Top categories: Forensics (99th), OSINT (99th), Cryptography (98th) - Team ACM @ CSU</p>
            </div>
            <a
              href="https://cyberskyline.com/report/85UBQ8522G95"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-5 py-2.5 flex-shrink-0"
            >
              Verify Report
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container pt-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: '99th', label: 'NCL Percentile', icon: <Shield size={20} /> },
            { value: '5+', label: 'Web Apps Built', icon: <Code2 size={20} /> },
            { value: '3+', label: 'Years Experience', icon: <Layers size={20} /> },
            { value: '15+', label: 'Technologies', icon: <Zap size={20} /> },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="card-glass text-center py-8 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2">{stat.value}</p>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">What I Do</h2>
          <div className="line-accent max-w-xs mx-auto mb-6" />
          <p className="section-subtitle">
            Specializing in web development and cybersecurity - building secure, performant applications
            while protecting digital infrastructure from threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Code2 size={28} />,
              title: 'Full-Stack Web Development',
              description: 'Building dynamic, responsive web applications end-to-end using Java, Spring Boot, Spring JPA, Angular, HTML, CSS, Bootstrap, and REST APIs - from database design to polished UI.',
              tags: ['Java', 'Spring Boot', 'Angular', 'REST APIs', 'HTML/CSS'],
            },
            {
              icon: <Shield size={28} />,
              title: 'Cybersecurity',
              description: 'Performing risk assessments, security monitoring, vulnerability analysis, and incident response using industry frameworks like NIST RMF and STRIDE.',
              tags: ['NIST RMF', 'STRIDE', 'SIEM', 'Forensics'],
            },
            {
              icon: <Server size={28} />,
              title: 'Security Operations',
              description: 'Deploying and configuring SIEM tools (Splunk, ELK Stack), analyzing network traffic with Wireshark, and ensuring compliance with ISO 27001 standards.',
              tags: ['Splunk', 'Wireshark', 'ELK Stack', 'ISO 27001'],
            },
            {
              icon: <Layers size={28} />,
              title: 'Backend & API Development',
              description: 'Designing scalable microservices, RESTful APIs, and backend systems with Java/Spring Boot, Spring JPA, JDBC, Python, SQL, and enterprise MVC architecture.',
              tags: ['Java', 'Spring Boot', 'Python', 'SQL', 'Microservices'],
            },
            {
              icon: <Globe size={28} />,
              title: 'Frontend Engineering',
              description: 'Crafting interactive single-page applications with Angular, React, and Next.js featuring component-based architecture, routing, data bindings, and responsive design.',
              tags: ['Angular', 'React', 'Next.js', 'TypeScript'],
            },
            {
              icon: <Zap size={28} />,
              title: 'Infrastructure & DevOps',
              description: 'Managing Linux environments, containerization with Docker, infrastructure automation with Ansible/Terraform, and CI/CD pipeline implementation.',
              tags: ['Linux', 'Docker', 'Ansible', 'Terraform'],
            },
          ].map((service, idx) => (
            <div key={idx} className="card group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="card-glass text-center py-16 px-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to work together?</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Looking for roles in Web Development and Cybersecurity. Let&apos;s connect and build something secure and impactful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                Start a Conversation <ArrowRight size={18} />
              </Link>
              <Link href="/projects" className="btn-secondary flex items-center justify-center gap-2">
                Browse Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
