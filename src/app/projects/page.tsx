'use client'

import { Github, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  liveLink?: string
  githubLink?: string
  category: string
  highlights: string[]
  status?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'WorkOnWheels (WOW)',
    description:
      'A full-stack booking system for bike and car servicing, for people who cannot get to a garage. Re-architected the Java, Spring Boot and Angular app and migrated it from a local environment to AWS: EC2 and S3 for delivery, Amazon RDS for a more reliable backend database, and Auto Scaling with Elastic Load Balancing to stay available during peak booking periods.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'REST APIs', 'AWS EC2', 'S3', 'RDS', 'Auto Scaling', 'ELB'],
    liveLink: 'https://yogeshbotcha965.github.io/W/-your',
    githubLink: 'https://github.com/YOGESHBOTCHA965/W',
    category: 'Software Engineering',
    highlights: ['Migrated to AWS', 'Auto scaling and load balancing', 'Personal project'],
  },
  {
    id: 9,
    title: 'AI Voice Agent',
    description:
      'An intelligent voice agent integrating speech recognition, language generation and text-to-speech modules with custom voice cloning for real-time, natural conversations. Built the end-to-end pipeline from audio input processing to dynamic response generation.',
    technologies: ['Python', 'Speech Recognition', 'LLMs', 'NLP', 'TTS', 'Voice Cloning'],
    category: 'AI and ML',
    highlights: ['Real-time pipeline', 'Voice cloning', 'Academic project'],
  },
  {
    id: 10,
    title: 'Diabetes Risk Prediction',
    description:
      'A machine learning model using the Random Forest algorithm on a Kaggle dataset to predict patient diabetes risk. Applied SMOTE to correct class imbalance for unbiased classification of high-risk cases, and compared predictive performance metrics to validate the approach.',
    technologies: ['Python', 'Random Forest', 'SMOTE', 'pandas', 'NumPy'],
    category: 'AI and ML',
    highlights: ['Class imbalance handled with SMOTE', 'Comparative evaluation', 'Academic project'],
  },
  {
    id: 2,
    title: 'Daily Schedule Tracker Website',
    description:
      'Built a web-based task and schedule management system using Java and frontend technologies to help users organize daily activities with persistent database storage. Designed intuitive interfaces and backend services that support CRUD operations and smooth workflow management.',
    technologies: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL', 'CRUD', 'Spring Boot'],
    liveLink: 'https://yogeshbotcha965.github.io/schedule-tracker/',
    githubLink: 'https://github.com/YOGESHBOTCHA965/schedule-tracker',
    category: 'Software Engineering',
    highlights: ['CRUD operations', 'Database storage', 'Task management'],
  },
  {
    id: 4,
    title: 'Builder Company Website',
    description:
      'Created a responsive business website for a construction company featuring service listings, client inquiry forms, and dynamic content management. Emphasized performance, usability, and maintainability with clean, modern design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    liveLink: 'https://builder-company.vercel.app/',
    category: 'Software Engineering',
    highlights: ['Responsive design', 'Client inquiry forms', 'Content management'],
  },
  {
    id: 5,
    title: 'Risk Management & Compliance Strategy for Uber Operations',
    description:
      'Conducted a comprehensive risk assessment on Uber\'s ride-sharing operations, identifying vulnerabilities in driver safety, fraudulent bookings, and compliance gaps. Developed mitigation strategies using NIST RMF and STRIDE threat modeling to strengthen operational security posture.',
    technologies: ['NIST RMF', 'STRIDE', 'Risk Assessment', 'Compliance', 'Threat Modeling'],
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
    category: 'Cybersecurity',
    highlights: ['99th percentile', '67th / 4,214', 'Team ACM @ CSU'],
  },
  {
    id: 7,
    title: 'Network Security Monitoring System',
    description:
      'Deployed and configured SIEM tools (Splunk, ELK Stack) to monitor and analyze network traffic for potential security threats. Created custom dashboards to visualize attack patterns and implemented automated alerting systems for detecting anomalies in real-time.',
    technologies: ['Splunk', 'ELK Stack', 'SIEM', 'Network Monitoring', 'Dashboard Design'],
    category: 'Cybersecurity',
    highlights: ['Custom SIEM dashboards', 'Automated alerting', 'Threat detection'],
  },
  {
    id: 8,
    title: 'Network Traffic Analysis Using Wireshark',
    description:
      'Analyzed network traffic with Wireshark to detect threats like ARP/DNS spoofing and data exfiltration, enhancing overall security posture. Delivered concise reports on anomalies, vulnerabilities, and proactive solutions to strengthen network defense.',
    technologies: ['Wireshark', 'Network Analysis', 'ARP Spoofing', 'DNS Analysis', 'Security Reports'],
    category: 'Cybersecurity',
    highlights: ['Threat detection', 'Vulnerability reports', 'Network defense'],
  },
]

const categories = ['All', 'Software Engineering', 'AI and ML', 'Cybersecurity']

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <>
      <header className="page-head">
        <span className="path">~/projects</span>
        <h1 className="h-page">Featured projects</h1>
        <p className="lede">
          Full-stack applications on Java, Spring Boot and AWS, AI and machine learning builds, and the
          security work behind them.
        </p>
      </header>

      <div className="container-page">
        <div role="tablist" aria-label="Filter projects" className="inline-flex flex-wrap gap-1 p-1 mb-8 rounded-lg bg-ink-850 border border-line">
          {categories.map((cat) => {
            const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
                className={`h-8 px-3 inline-flex items-center gap-2 rounded-md text-sm transition-colors duration-150 ease-out ${
                  activeFilter === cat ? 'bg-ink-750 text-fg' : 'text-fg-2 hover:text-fg'
                }`}
              >
                {cat}
                <span className="meta">{count}</span>
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {filteredProjects.map((project) => (
            <article key={project.id} className="panel p-6 flex flex-col">
              <div className="flex items-center justify-between gap-4 h-8">
                <span className="meta">{project.category}</span>
                <div className="flex gap-1 -mr-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source on GitHub`}
                      className="w-8 h-8 inline-flex items-center justify-center rounded-md text-fg-3 hover:text-fg hover:bg-ink-800 transition-colors duration-150 ease-out"
                    >
                      <Github size={16} strokeWidth={1.5} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="w-8 h-8 inline-flex items-center justify-center rounded-md text-fg-3 hover:text-fg hover:bg-ink-800 transition-colors duration-150 ease-out"
                    >
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>

              <h2 className="text-lg font-medium text-fg mt-3">{project.title}</h2>
              <p className="text-sm leading-6 text-fg-2 mt-3 flex-grow">{project.description}</p>

              <p className="text-sm text-fg mt-4">{project.highlights.join(' · ')}</p>

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-line">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="panel p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="h-section">More on GitHub</h2>
            <p className="text-fg-2 mt-2 max-w-md">
              Smaller experiments, coursework and contributions that are not listed here.
            </p>
          </div>
          <a
            href="https://github.com/yogeshbotcha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0"
          >
            <Github size={16} strokeWidth={1.5} />
            GitHub profile
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </>
  )
}
