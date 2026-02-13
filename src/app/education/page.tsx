'use client'

import { GraduationCap, Award, ExternalLink, Calendar, BookOpen, Trophy, Shield, Code } from 'lucide-react'

interface EducationItem {
  id: number
  institution: string
  degree: string
  field: string
  duration: string
  location: string
  details: string[]
}

interface Certification {
  id: number
  name: string
  issuer: string
  date: string
  status?: string
  credentialLink?: string
}

const educations: EducationItem[] = [
  {
    id: 1,
    institution: 'Columbus State University',
    degree: 'Master of Science',
    field: 'Cybersecurity',
    duration: 'Aug 2024 – Present',
    location: 'Columbus, GA',
    details: [
      'Coursework: Network Security, Cybersecurity Risk Management, Digital Forensics, Network and Cloud Management',
      'NCL Fall 2025 Team Game: Ranked 67th out of 4,214 (99th Percentile) - Team ACM @ CSU',
      'Top NCL Categories: Forensics (99th percentile), Open Source Intelligence (99th percentile), Cryptography (98th percentile)',
      'President, India Club at CSU (Fall 2024 – Present)',
      'E-Board Member, International Club at CSU (Fall 2024 – Present)',
    ],
  },
  {
    id: 2,
    institution: 'CMR Technical Campus',
    degree: 'Bachelor of Technology',
    field: 'Mechanical Engineering',
    duration: 'Jul 2018 – Aug 2022',
    location: 'Hyderabad, India',
    details: [
      'Coursework: C Language, Database Management Systems, Auto-CAD, Remote Sensing',
      'Certified Full Stack Developer (Java) via TalentSprint - Awarded "Outstanding" grade (Top 20% Performers)',
      'Joint Secretary and Dance Choreographer, Akriti Cultural Club',
      'Junior Secretary, Mechanical Engineering Students Association',
    ],
  },
]

const certifications: Certification[] = [
  {
    id: 1,
    name: 'Certified Full Stack Developer (Java) - Outstanding (Top 20%)',
    issuer: 'TalentSprint',
    date: 'Dec 2022 – May 2023',
    credentialLink: '#',
  },
  {
    id: 2,
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'In Progress',
    status: 'In Progress',
  },
  {
    id: 3,
    name: 'TryHackMe Cybersecurity 101',
    issuer: 'TryHackMe',
    date: '2024',
    credentialLink: '#',
  },
  {
    id: 4,
    name: 'TryHackMe Pre-Security',
    issuer: 'TryHackMe',
    date: '2024',
    credentialLink: '#',
  },
]

const nclCategories = [
  { name: 'Forensics', rank: '47th', percentile: '99th', score: '275/300', accuracy: '44.4%', completion: '92.3%' },
  { name: 'Open Source Intelligence', rank: '82nd', percentile: '99th', score: '370/370', accuracy: '62.8%', completion: '100%' },
  { name: 'Cryptography', rank: '93rd', percentile: '98th', score: '305/340', accuracy: '89.5%', completion: '94.4%' },
  { name: 'Enumeration & Exploitation', rank: '96th', percentile: '98th', score: '305/390', accuracy: '48.9%', completion: '69.7%' },
  { name: 'Network Traffic Analysis', rank: '118th', percentile: '98th', score: '235/300', accuracy: '65.4%', completion: '81%' },
  { name: 'Log Analysis', rank: '153rd', percentile: '97th', score: '300/300', accuracy: '43.5%', completion: '100%' },
  { name: 'Password Cracking', rank: '165th', percentile: '97th', score: '205/325', accuracy: '85.7%', completion: '69.2%' },
  { name: 'Scanning & Reconnaissance', rank: '188th', percentile: '96th', score: '300/300', accuracy: '69.6%', completion: '100%' },
  { name: 'Web Application Exploitation', rank: '186th', percentile: '96th', score: '245/275', accuracy: '68.8%', completion: '84.6%' },
]

export default function EducationPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="page-header">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 section-container">
          <p className="text-cyan-400 text-sm font-mono tracking-wider mb-4 uppercase">Background</p>
          <h1 className="section-title">Education & Certifications</h1>
          <div className="line-accent max-w-xs mx-auto my-6" />
          <p className="section-subtitle">
            My academic foundation in cybersecurity and engineering, along with professional certifications
            and competitive cybersecurity achievements.
          </p>
        </div>
      </div>

      <div className="section-container pt-0">
        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <GraduationCap size={22} />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>

          <div className="space-y-6">
            {educations.map((edu) => (
              <div key={edu.id} className="card group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree} in {edu.field}</h3>
                    <p className="text-cyan-400 font-semibold text-sm mb-1">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">{edu.location}</p>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-400 text-xs font-mono whitespace-nowrap flex items-center gap-1.5">
                    <Calendar size={11} />
                    {edu.duration}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex gap-3 leading-relaxed">
                      <span className="mt-2 flex-shrink-0">
                        <div className="w-1 h-1 rounded-full bg-cyan-400/60" />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* NCL Scouting Report Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
              <Trophy size={22} />
            </div>
            <h2 className="text-2xl font-bold text-white">NCL Fall 2025 - Scouting Report</h2>
          </div>

          {/* Overall Stats */}
          <div className="card-glass mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-extrabold gradient-text">67th</p>
                <p className="text-gray-500 text-xs mt-1">National Rank (out of 4,214)</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold gradient-text">99th</p>
                <p className="text-gray-500 text-xs mt-1">National Percentile</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold gradient-text">2,640</p>
                <p className="text-gray-500 text-xs mt-1">Points (out of 3,000)</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold gradient-text">86.2%</p>
                <p className="text-gray-500 text-xs mt-1">Completion Rate (Avg: 37.8%)</p>
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nclCategories.map((cat, idx) => (
              <div key={idx} className="card-glass group">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{cat.name}</h4>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold">
                    {cat.percentile}
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Rank</span>
                    <span className="text-gray-300 font-mono">{cat.rank} / 4,214</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Score</span>
                    <span className="text-gray-300 font-mono">{cat.score}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accuracy</span>
                    <span className="text-gray-300 font-mono">{cat.accuracy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completion</span>
                    <span className="text-gray-300 font-mono">{cat.completion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="https://cyberskyline.com/report/85UBQ8522G95"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 text-sm"
            >
              <Shield size={16} />
              Verify Full Report on Cyber Skyline
              <ExternalLink size={14} />
            </a>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
              <Award size={22} />
            </div>
            <h2 className="text-2xl font-bold text-white">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="card-glass group flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">{cert.name}</h3>
                  <p className="text-cyan-400/80 text-xs font-semibold mb-1">{cert.issuer}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 text-xs flex items-center gap-1">
                      <Calendar size={10} /> {cert.date}
                    </p>
                    {cert.status && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-semibold">
                        {cert.status}
                      </span>
                    )}
                  </div>
                </div>
                {cert.credentialLink && (
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                    title="View credential"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Java Full Stack Program Deep Dive */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Code size={22} />
            </div>
            <h2 className="text-2xl font-bold text-white">Java Full Stack Developer Program - TalentSprint</h2>
          </div>

          <div className="card mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Certified Full Stack Developer (Java)</h3>
                <p className="text-cyan-400 text-sm font-semibold">TalentSprint &middot; Certificate ID: 2237467</p>
                <p className="text-gray-500 text-xs mt-1">Dec 2022 – May 2023</p>
              </div>
              <span className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold whitespace-nowrap">
                ⭐ Outstanding - Top 20% Performers
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              An intensive, industry-aligned full-stack Java web development program covering end-to-end
              application development - from foundational programming concepts through enterprise-grade
              web application architecture with Spring Boot and Angular.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  module: 'Foundations of Programming',
                  topics: ['Variables & Data Types', 'Loops & Control Flow', 'Arrays & Strings', 'Problem Solving & Logic'],
                },
                {
                  module: 'Core Java & OOP',
                  topics: ['Classes & Objects', 'Constructors & Inheritance', 'Interfaces & Abstraction', 'Exception & File Handling'],
                },
                {
                  module: 'Data & Web Development',
                  topics: ['SQL (DDL, DML, Joins, Subqueries)', 'JDBC Database Connectivity', 'HTML, CSS & Bootstrap', 'Responsive Web Design'],
                },
                {
                  module: 'Enterprise Web Development',
                  topics: ['Servlets, JSPs & JSTL', 'MVC Architecture with DAO Pattern', 'Spring DI, Spring Boot & REST APIs', 'Angular (Components, Routing, HttpClient)'],
                },
              ].map((block, idx) => (
                <div key={idx} className="card-glass">
                  <h4 className="text-sm font-bold text-white mb-3">{block.module}</h4>
                  <ul className="space-y-1.5">
                    {block.topics.map((topic, i) => (
                      <li key={i} className="text-gray-400 text-xs flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-400/60 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <h4 className="text-sm font-bold text-white mb-2">🎓 Capstone Project</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Developed an end-to-end full-stack web application integrating Angular frontend with Spring Boot
                backend and SQL database, implementing CRUD operations, RESTful APIs, authentication,
                and responsive UI - demonstrating mastery of the complete Java web development stack.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Philosophy */}
        <div className="card-glass text-center py-12 px-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-violet-500/8 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mx-auto mb-5">
              <BookOpen size={20} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Continuous Learning</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              From mechanical engineering to full-stack web development to cybersecurity, my journey reflects a passion for continuous
              growth. I actively build web applications, participate in CTF competitions, cybersecurity labs on TryHackMe,
              and stay current with modern web frameworks and security practices. Currently pursuing CompTIA Security+ to further
              strengthen my credentials.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
