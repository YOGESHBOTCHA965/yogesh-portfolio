'use client'

import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react'

interface ExperienceItem {
  id: number
  company: string
  position: string
  location: string
  duration: string
  type: string
  description: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Turner College @ Columbus State University',
    position: 'Graduate Student Research Assistant',
    location: 'Columbus, Georgia',
    duration: 'Oct 2025 – Jan 2026',
    type: 'Part-time',
    description: [
      'Collaborated on a cybersecurity research project focused on advanced network intrusion detection methods.',
      'Developed and evaluated techniques to enhance system resilience against obfuscation and chaff-based evasion.',
      'Engaged in rigorous testing and analysis to ensure the effectiveness of proposed solutions.',
      'Contributed to a research team at Turner College, a respected institution in Columbus, Georgia.',
    ],
    technologies: ['Network Intrusion Detection', 'Cybersecurity Research', 'Evasion Techniques', 'Testing & Analysis'],
  },
  {
    id: 2,
    company: 'Columbus State University',
    position: 'Graduate Administrative Assistant',
    location: 'Columbus, Georgia',
    duration: 'Jan 2025 – Present',
    type: 'Part-time',
    description: [
      'Analyze academic-program datasets (5K+ records) in Excel and Python to identify operational risks and data-quality control gaps; presented findings to Dean\'s office, enabling 15% faster reporting cycles.',
      'Developed process-flow diagrams and risk-control matrices for annual program reviews, supporting internal and external accreditation audits.',
      'Generated monthly KPI dashboards for 4 departments, providing management with continuous-monitoring insights on performance and compliance.',
    ],
    technologies: ['Python', 'Excel', 'Data Analytics', 'Risk Assessment', 'KPI Dashboards'],
  },
  {
    id: 3,
    company: 'Kyndryl',
    position: 'Technical Support Analyst - Senior Agent',
    location: 'Hyderabad, India',
    duration: 'Oct 2023 – Jun 2024',
    type: 'Full-time',
    description: [
      'Resolved 250+ high-severity cybersecurity and network incidents (95% first-touch success), performing root-cause analysis and documenting remedial controls, which reduced repeat issues by 20%.',
      'Executed advanced network troubleshooting, ensuring minimal downtime across enterprise infrastructure.',
      'Authored knowledge-base articles and control-validation checklists adopted by 30+ analysts, strengthening audit readiness for ISO 27001 assessments.',
    ],
    technologies: ['Cybersecurity', 'Network Troubleshooting', 'ISO 27001', 'Incident Response', 'Root-Cause Analysis'],
  },
  {
    id: 4,
    company: 'Shanti Switchgears Private Limited',
    position: 'Java Full-Stack Developer Intern',
    location: 'Hyderabad, India',
    duration: 'Jun 2022 – Jun 2023',
    type: 'Internship',
    description: [
      'Designed and developed full-stack web applications using Java, Spring Boot, Angular, HTML, CSS, and Bootstrap, delivering responsive user interfaces and robust backend services.',
      'Built and optimized RESTful microservices with Spring Boot and Spring JPA, integrating JDBC for seamless database operations and CRUD functionality.',
      'Developed dynamic frontend components using Angular with custom components, data bindings, routing, and dependency injection for interactive single-page applications.',
      'Implemented server-side logic with Java Servlets, JSPs, JSTL, and MVC architecture with DAO pattern, ensuring clean separation of concerns.',
      'Collaborated with cross-functional teams to debug, test, and deploy production-ready web features, applying enterprise web development best practices.',
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'HTML/CSS', 'Bootstrap', 'REST APIs', 'Spring JPA', 'JDBC', 'Servlets', 'JSP', 'Git'],
  },
  {
    id: 5,
    company: 'Decathlon Sports India',
    position: 'Marketing & Sales Associate',
    location: 'Hyderabad, India',
    duration: '2022',
    type: 'Part-time',
    description: [
      'Supported marketing and sales initiatives centered on customer acquisition and campaign execution in a B2C environment.',
      'Contributed to in-store engagement strategies, driving foot traffic and improving customer conversion rates.',
      'Gained hands-on experience in understanding how marketing technology and user experience influence lead generation and business growth.',
    ],
    technologies: ['Marketing', 'Sales', 'Customer Acquisition', 'Campaign Execution'],
  },
  {
    id: 6,
    company: 'Adonmo',
    position: 'Marketing Intern',
    location: 'Remote',
    duration: '2022',
    type: 'Internship',
    description: [
      'Collaborated with the marketing team at this digital out-of-home advertising agency on acquisition strategies and performance-driven campaigns.',
      'Supported development of marketing materials and digital campaign tracking, improving attribution for client campaigns.',
      'Gained exposure to how marketing technology, tracking, and analytics directly influence advertising performance.',
    ],
    technologies: ['Digital Marketing', 'Campaign Analytics', 'DOOH Advertising', 'Performance Marketing'],
  },
]

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="page-header">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-violet-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 section-container">
          <p className="text-cyan-400 text-sm font-mono tracking-wider mb-4 uppercase">Career</p>
          <h1 className="section-title">Work Experience</h1>
          <div className="line-accent max-w-xs mx-auto my-6" />
          <p className="section-subtitle">
            A timeline of my professional journey spanning cybersecurity, web development,
            technical support, and marketing - across the U.S. and India.
          </p>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="section-container pt-0">
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/20 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 md:pl-20 pb-16 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full border-2 border-cyan-400 bg-primary group-hover:bg-cyan-400 transition-all duration-300 shadow-sm shadow-cyan-400/30" />
              </div>

              {/* Duration badge (mobile) */}
              <div className="flex items-center gap-2 text-gray-500 text-xs font-mono mb-3 md:hidden">
                <Calendar size={12} />
                <span>{exp.duration}</span>
                <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-gray-500 text-[10px] uppercase tracking-wider">
                  {exp.type}
                </span>
              </div>

              {/* Card */}
              <div className="card group-hover:border-cyan-500/20">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-cyan-400 font-semibold text-sm">{exp.company}</span>
                      <span className="text-gray-700">|</span>
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <MapPin size={11} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Duration badge (desktop) */}
                  <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                    <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-400 text-xs font-mono whitespace-nowrap">
                      {exp.duration}
                    </span>
                    <span className="px-2.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-wider font-semibold">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="mb-5 space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex gap-3 leading-relaxed">
                      <span className="text-cyan-500/60 mt-1.5 flex-shrink-0">
                        <div className="w-1 h-1 rounded-full bg-cyan-400/60" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Summary */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="card-glass text-center py-12 px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Career Summary</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              3+ years of professional experience spanning full-stack Java web development, enterprise 
              cybersecurity operations, research, and data analytics. From building web applications with 
              Java/Spring Boot/Angular to securing enterprise infrastructure - driven by clean code, 
              continuous learning, and delivering secure, user-centric web solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
