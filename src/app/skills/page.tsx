'use client'

import { Code2, Database, Wrench, Shield, Brain, Globe, BarChart3 } from 'lucide-react'

interface SkillCategory {
  id: number
  name: string
  icon: React.ReactNode
  color: string
  skills: Skill[]
}

interface Skill {
  name: string
  proficiency: number
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: 'Web Development',
    icon: <Code2 size={24} />,
    color: 'cyan',
    skills: [
      { name: 'Java', proficiency: 90 },
      { name: 'Spring Boot', proficiency: 85 },
      { name: 'HTML5 / CSS3', proficiency: 92 },
      { name: 'JavaScript', proficiency: 85 },
      { name: 'Angular', proficiency: 80 },
      { name: 'Python', proficiency: 82 },
      { name: 'C Language', proficiency: 75 },
      { name: 'REST APIs', proficiency: 88 },
    ],
  },
  {
    id: 2,
    name: 'Cybersecurity',
    icon: <Shield size={24} />,
    color: 'violet',
    skills: [
      { name: 'NIST RMF', proficiency: 88 },
      { name: 'STRIDE Modeling', proficiency: 85 },
      { name: 'Risk Assessment', proficiency: 90 },
      { name: 'Digital Forensics', proficiency: 85 },
      { name: 'Incident Response', proficiency: 88 },
      { name: 'Network Security', proficiency: 87 },
      { name: 'ISO 27001', proficiency: 82 },
      { name: 'Vulnerability Analysis', proficiency: 85 },
    ],
  },
  {
    id: 3,
    name: 'Security Tools',
    icon: <Wrench size={24} />,
    color: 'emerald',
    skills: [
      { name: 'Splunk (SIEM)', proficiency: 85 },
      { name: 'ELK Stack', proficiency: 82 },
      { name: 'Wireshark', proficiency: 88 },
      { name: 'Hashcat', proficiency: 78 },
      { name: 'Active Directory', proficiency: 80 },
      { name: 'Varonis', proficiency: 75 },
      { name: 'VMware', proficiency: 82 },
      { name: 'TryHackMe Labs', proficiency: 85 },
    ],
  },
  {
    id: 4,
    name: 'Data & Analytics',
    icon: <BarChart3 size={24} />,
    color: 'cyan',
    skills: [
      { name: 'SQL', proficiency: 88 },
      { name: 'Excel (PivotTables, PowerQuery)', proficiency: 90 },
      { name: 'Python (pandas)', proficiency: 82 },
      { name: 'Tableau', proficiency: 80 },
      { name: 'DataStudio', proficiency: 78 },
      { name: 'RedShift', proficiency: 72 },
      { name: 'Data Visualization', proficiency: 85 },
      { name: 'KPI Dashboards', proficiency: 88 },
    ],
  },
  {
    id: 5,
    name: 'Infrastructure & DevOps',
    icon: <Database size={24} />,
    color: 'violet',
    skills: [
      { name: 'Linux', proficiency: 85 },
      { name: 'Docker', proficiency: 78 },
      { name: 'Ansible', proficiency: 75 },
      { name: 'Terraform', proficiency: 72 },
      { name: 'CI/CD Pipelines', proficiency: 78 },
      { name: 'Git / GitHub', proficiency: 90 },
      { name: 'Cloud Management', proficiency: 76 },
      { name: 'Database Management', proficiency: 85 },
    ],
  },
]

const techStack = [
  'Java', 'Spring Boot', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'Python',
  'SQL', 'Splunk', 'Wireshark', 'ELK Stack', 'Hashcat', 'Docker', 'Linux',
  'Git', 'VMware', 'Tableau', 'Excel', 'Active Directory', 'Terraform',
  'Ansible', 'Varonis', 'NIST RMF', 'STRIDE', 'DataStudio', 'RedShift',
]

const getBarColor = (color: string) => {
  switch (color) {
    case 'cyan': return 'from-cyan-400 to-blue-500'
    case 'violet': return 'from-violet-400 to-purple-500'
    case 'emerald': return 'from-emerald-400 to-teal-500'
    default: return 'from-cyan-400 to-blue-500'
  }
}

const getIconBg = (color: string) => {
  switch (color) {
    case 'cyan': return 'bg-cyan-500/10 text-cyan-400'
    case 'violet': return 'bg-violet-500/10 text-violet-400'
    case 'emerald': return 'bg-emerald-500/10 text-emerald-400'
    default: return 'bg-cyan-500/10 text-cyan-400'
  }
}

export default function SkillsPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="page-header">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 section-container">
          <p className="text-cyan-400 text-sm font-mono tracking-wider mb-4 uppercase">Expertise</p>
          <h1 className="section-title">Technical Skills</h1>
          <div className="line-accent max-w-xs mx-auto my-6" />
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise spanning web development, cybersecurity,
            security tooling, data analytics, and infrastructure management.
          </p>
        </div>
      </div>

      {/* Risk & Audit Skills Highlight */}
      <div className="section-container pt-0 pb-8">
        <div className="card-glass relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Shield size={20} className="text-violet-400" />
              Risk & Audit Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Internal Audit Methodology', 'Risk Identification & Analysis', 'Control Testing',
                'Continuous Monitoring', 'Issue Reporting', 'RCSA', 'NIST RMF', 'STRIDE',
                'Root-Cause Analysis', 'Compliance Assessment',
              ].map((skill, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-violet-500/10 text-violet-300 text-xs font-medium rounded-lg border border-violet-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="section-container pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category) => (
            <div key={category.id} className="card group">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 rounded-xl ${getIconBg(category.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold text-white">{category.name}</h2>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-xs font-mono text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getBarColor(category.color)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Tech Stack</h2>
            <p className="text-gray-500 text-sm">Technologies and tools I work with regularly</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm font-medium text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Brain size={24} />,
              title: 'Problem Solving',
              items: ['Algorithmic Thinking', 'Root-Cause Analysis', 'Debugging & Troubleshooting', 'CTF Competitions', 'Technical Writing'],
            },
            {
              icon: <Globe size={24} />,
              title: 'Leadership',
              items: ['President, India Club at CSU', 'E-Board, International Club', 'Team Collaboration', 'Mentoring', 'Event Management'],
            },
            {
              icon: <Shield size={24} />,
              title: 'Security Operations',
              items: ['Threat Monitoring', 'Incident Response', 'Audit Readiness', 'Compliance (ISO 27001)', 'Vulnerability Scanning'],
            },
          ].map((comp, idx) => (
            <div key={idx} className="card-glass">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5">
                {comp.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{comp.title}</h3>
              <ul className="space-y-2.5">
                {comp.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="card-glass text-center py-12 px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Always Learning, Always Growing</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Currently pursuing CompTIA Security+ certification and actively competing in NCL CTF events.
            From Java development to cybersecurity, I continuously expand my skill set to stay ahead
            in the rapidly evolving tech landscape.
          </p>
        </div>
      </div>
    </div>
  )
}
