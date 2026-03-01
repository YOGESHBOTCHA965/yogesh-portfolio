'use client'

import { ExternalLink, Github, ArrowUpRight, Star, Shield } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  liveLink?: string
  githubLink?: string
  gradient: string
  category: string
  highlights: string[]
  status?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'WorkOnWheels (WOW)',
    description:
      'Designed and developed a full-stack website for bike and car service bookings for users unable to visit garages. Built with Java, Angular, HTML, CSS, and Spring Boot featuring a user-friendly interface, efficient scheduling, and streamlined booking systems.',
    technologies: ['Java', 'Angular', 'Spring Boot', 'HTML', 'CSS', 'REST APIs'],
    liveLink: 'https://yogeshbotcha965.github.io/W/-your',
    githubLink: 'https://github.com/YOGESHBOTCHA965/W',
    gradient: 'from-amber-500/20 to-orange-600/20',
    category: 'Web Development',
    highlights: ['Full-stack app', 'Booking system', 'User-friendly UI'],
  },
  {
    id: 2,
    title: 'Daily Schedule Tracker Website',
    description:
      'Built a web-based task and schedule management system using Java and frontend technologies to help users organize daily activities with persistent database storage. Designed intuitive interfaces and backend services that support CRUD operations and smooth workflow management.',
    technologies: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL', 'CRUD', 'Spring Boot'],
    liveLink: 'https://yogeshbotcha965.github.io/schedule-tracker/',
    githubLink: 'https://github.com/YOGESHBOTCHA965/schedule-tracker',
    gradient: 'from-teal-500/20 to-cyan-600/20',
    category: 'Web Development',
    highlights: ['CRUD operations', 'Database storage', 'Task management'],
  },
  {
    id: 3,
    title: 'AI Voice Agent',
    description:
      'Built an intelligent voice agent integrating speech recognition, language generation, and text-to-speech modules with custom voice cloning for real-time, natural human-AI conversations. Developed end-to-end pipeline connecting audio input processing to dynamic response generation.',
    technologies: ['Python', 'Speech Recognition', 'NLP', 'TTS', 'Voice Cloning', 'AI/ML'],
    gradient: 'from-fuchsia-500/20 to-pink-600/20',
    category: 'Web Development',
    highlights: ['Voice cloning', 'Real-time conversations', 'End-to-end pipeline'],
  },
  {
    id: 4,
    title: 'Builder Company Website',
    description:
      'Created a responsive business website for a construction company featuring service listings, client inquiry forms, and dynamic content management. Emphasized performance, usability, and maintainability with clean, modern design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    liveLink: 'https://builder-company.vercel.app/',
    gradient: 'from-yellow-500/20 to-amber-600/20',
    category: 'Web Development',
    highlights: ['Responsive design', 'Client inquiry forms', 'Content management'],
  },
  {
    id: 5,
    title: 'Risk Management & Compliance Strategy for Uber Operations',
    description:
      'Conducted a comprehensive risk assessment on Uber\'s ride-sharing operations, identifying vulnerabilities in driver safety, fraudulent bookings, and compliance gaps. Developed mitigation strategies using NIST RMF and STRIDE threat modeling to strengthen operational security posture.',
    technologies: ['NIST RMF', 'STRIDE', 'Risk Assessment', 'Compliance', 'Threat Modeling'],
    gradient: 'from-violet-500/20 to-purple-600/20',
    category: 'Cybersecurity',
    highlights: ['NIST RMF framework', 'STRIDE modeling', 'Risk mitigation'],
  },
  {
    id: 6,
    title: 'NCL CTF Competition - 99th Percentile',
    description:
      'Competed in the National Cyber League Fall 2025 Team Game as part of Team ACM @ CSU. Achieved 67th place out of 4,214 participants (99th percentile) with strong performance across 9 cybersecurity categories including Forensics, OSINT, Cryptography, and Web Application Exploitation.',
    technologies: ['CTF', 'Forensics', 'Cryptography', 'OSINT', 'Network Analysis', 'Password Cracking'],
    liveLink: 'https://cyberskyline.com/report/85UBQ8522G95',
    gradient: 'from-pink-500/20 to-rose-600/20',
    category: 'Cybersecurity',
    highlights: ['99th percentile', '67th / 4,214', 'Team ACM @ CSU'],
  },
  {
    id: 7,
    title: 'Network Security Monitoring System',
    description:
      'Deployed and configured SIEM tools (Splunk, ELK Stack) to monitor and analyze network traffic for potential security threats. Created custom dashboards to visualize attack patterns and implemented automated alerting systems for detecting anomalies in real-time.',
    technologies: ['Splunk', 'ELK Stack', 'SIEM', 'Network Monitoring', 'Dashboard Design'],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    category: 'Cybersecurity',
    highlights: ['Custom SIEM dashboards', 'Automated alerting', 'Threat detection'],
  },
  {
    id: 8,
    title: 'Network Traffic Analysis Using Wireshark',
    description:
      'Analyzed network traffic with Wireshark to detect threats like ARP/DNS spoofing and data exfiltration, enhancing overall security posture. Delivered concise reports on anomalies, vulnerabilities, and proactive solutions to strengthen network defense.',
    technologies: ['Wireshark', 'Network Analysis', 'ARP Spoofing', 'DNS Analysis', 'Security Reports'],
    gradient: 'from-emerald-500/20 to-teal-600/20',
    category: 'Cybersecurity',
    highlights: ['Threat detection', 'Vulnerability reports', 'Network defense'],
  },
]

const categories = ['All', 'Cybersecurity', 'Web Development']

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="page-header">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 section-container">
          <p className="text-cyan-400 text-sm font-mono tracking-wider mb-4 uppercase">Portfolio</p>
          <h1 className="section-title">Featured Projects</h1>
          <div className="line-accent max-w-xs mx-auto my-6" />
          <p className="section-subtitle">
            A curated selection of cybersecurity, web development, and data analytics projects
            that demonstrate my technical skills and problem-solving approach.
          </p>
        </div>
      </div>

      <div className="section-container pt-0">
        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                  : 'text-gray-500 hover:text-gray-300 border border-transparent hover:bg-white/[0.03]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group flex flex-col h-full overflow-hidden">
              {/* Project preview header */}
              <div className={`-mx-6 -mt-6 mb-6 p-8 bg-gradient-to-br ${project.gradient} border-b border-white/[0.04] relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag inline-block">{project.category}</span>
                      {project.status && (
                        <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] uppercase tracking-wider font-semibold">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black/40 transition-all"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black/40 transition-all"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.highlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-1 text-xs text-gray-500 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.04]">
                    <Star size={10} className="text-amber-400" />
                    {h}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="card-glass text-center py-12 px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Want to see more?</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
            Check out my GitHub for more projects, experiments, and contributions.
            I am always building and learning new things.
          </p>
          <a
            href="https://github.com/yogeshbotcha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github size={18} />
            View GitHub Profile
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
