import { ArrowUpRight } from 'lucide-react'
import { nclCategories, nclReportUrl, nclSummary } from '@/data/ncl'

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
    duration: 'Aug 2024 – May 2026',
    location: 'Columbus, GA',
    details: [
      'Graduated May 2026',
      'Coursework: Network Security, Cybersecurity Risk Management, Digital Forensics, Network and Cloud Management',
      'NCL Fall 2025 Team Game: Ranked 67th out of 4,214 (99th percentile) with Team ACM @ CSU',
      'Top NCL categories: Forensics (99th percentile), Open Source Intelligence (99th percentile), Cryptography (98th percentile)',
      'President, India Club at CSU',
      'E-Board Member, International Club at CSU',
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
      'Certified Full Stack Developer (Java) via TalentSprint, awarded "Outstanding" grade (top 20% of performers)',
      'Joint Secretary and Dance Choreographer, Akriti Cultural Club',
      'Junior Secretary, Mechanical Engineering Students Association',
    ],
  },
]

const certifications: Certification[] = [
  {
    id: 1,
    name: 'Certified Full Stack Developer (Java), Outstanding (top 20%)',
    issuer: 'TalentSprint',
    date: 'Dec 2022 – May 2023',
  },
  {
    id: 2,
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'In progress',
    status: 'In progress',
  },
  {
    id: 3,
    name: 'TryHackMe Cybersecurity 101',
    issuer: 'TryHackMe',
    date: '2024',
  },
  {
    id: 4,
    name: 'TryHackMe Pre-Security',
    issuer: 'TryHackMe',
    date: '2024',
  },
]

const programModules = [
  {
    module: 'Foundations of programming',
    topics: ['Variables & Data Types', 'Loops & Control Flow', 'Arrays & Strings', 'Problem Solving & Logic'],
  },
  {
    module: 'Core Java and OOP',
    topics: ['Classes & Objects', 'Constructors & Inheritance', 'Interfaces & Abstraction', 'Exception & File Handling'],
  },
  {
    module: 'Data and web development',
    topics: ['SQL (DDL, DML, Joins, Subqueries)', 'JDBC Database Connectivity', 'HTML, CSS & Bootstrap', 'Responsive Web Design'],
  },
  {
    module: 'Enterprise web development',
    topics: ['Servlets, JSPs & JSTL', 'MVC Architecture with DAO Pattern', 'Spring DI, Spring Boot & REST APIs', 'Angular (Components, Routing, HttpClient)'],
  },
]

const nclStats = [
  { value: `${nclSummary.rank}th`, label: `National rank of ${nclSummary.teams}`, lead: true },
  { value: nclSummary.percentile, label: 'National percentile' },
  { value: nclSummary.points, label: `Points of ${nclSummary.maxPoints}` },
  { value: nclSummary.completion, label: `Completion, average ${nclSummary.averageCompletion}` },
]

export default function EducationPage() {
  return (
    <>
      <header className="page-head">
        <span className="path">~/education</span>
        <h1 className="h-page">Education and certifications</h1>
        <p className="lede">
          An M.S. from Columbus State University (May 2026), a B.Tech from CMR Technical Campus, a Java
          full-stack certification and competitive results from the National Cyber League.
        </p>
      </header>

      <div className="container-page flex flex-col gap-24">
        <section>
          <h2 className="h-section mb-6">Education</h2>
          <ol className="divided border-t border-line">
            {educations.map((edu) => (
              <li key={edu.id} className="py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12">
                <div className="flex md:flex-col gap-x-3 gap-y-1 flex-wrap">
                  <span className="meta text-fg-2">{edu.duration}</span>
                  <span className="meta">{edu.location}</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-fg">{edu.degree} in {edu.field}</h3>
                  <p className="text-sm text-fg-2 mt-1">{edu.institution}</p>
                  <ul className="mt-5 flex flex-col gap-3 max-w-3xl">
                    {edu.details.map((detail) => (
                      <li key={detail} className="text-sm leading-6 text-fg-2 pl-4 relative">
                        <span className="absolute left-0 top-[11px] w-1.5 h-px bg-fg-3" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p className="meta mb-2">National Cyber League · Fall 2025</p>
              <h2 className="h-section">Scouting report</h2>
            </div>
            <a href={nclReportUrl} target="_blank" rel="noopener noreferrer" className="link text-sm inline-flex items-center gap-1">
              Verify on Cyber Skyline
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          </div>

          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {nclStats.map((stat) => (
              <div key={stat.label} className="panel p-5">
                <dt className="text-sm text-fg-2">{stat.label}</dt>
                <dd className={`text-3xl font-medium tabular-nums mt-2 ${stat.lead ? 'text-accent' : 'text-fg'}`}>{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="panel overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="text-left text-fg-3 border-b border-line">
                  <th className="font-normal py-3 px-5">Category</th>
                  <th className="font-normal py-3 px-5 text-right">Rank</th>
                  <th className="font-normal py-3 px-5 text-right">Percentile</th>
                  <th className="font-normal py-3 px-5 w-[200px]">Score</th>
                  <th className="font-normal py-3 px-5 text-right">Accuracy</th>
                  <th className="font-normal py-3 px-5 text-right">Completion</th>
                </tr>
              </thead>
              <tbody className="divided">
                {nclCategories.map((cat) => (
                  <tr key={cat.name} className="hover:bg-ink-800/60 transition-colors duration-150 ease-out">
                    <td className="py-3 px-5 text-fg">{cat.name}</td>
                    <td className="py-3 px-5 text-right font-mono text-fg-2 tabular-nums">{cat.rank}</td>
                    <td className="py-3 px-5 text-right font-mono text-fg-2 tabular-nums">{cat.percentile}</td>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1 rounded-full bg-ink-800 overflow-hidden">
                          <div className="h-full rounded-full bg-fg-3/60" style={{ width: `${(cat.score / cat.max) * 100}%` }} />
                        </div>
                        <span className="font-mono text-xs text-fg-2 tabular-nums w-16 text-right">{cat.score}/{cat.max}</span>
                      </div>
                    </td>
                    <td className="py-3 px-5 text-right font-mono text-fg-2 tabular-nums">{cat.accuracy}</td>
                    <td className="py-3 px-5 text-right font-mono text-fg-2 tabular-nums">{cat.completion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="h-section mb-6">Certifications</h2>
          <ul className="panel divided">
            {certifications.map((cert) => (
              <li key={cert.id} className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="text-sm text-fg">{cert.name}</p>
                  <p className="text-sm text-fg-2 mt-1">{cert.issuer}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`meta ${cert.status ? 'text-accent' : ''}`}>{cert.date}</span>
                  {cert.credentialLink && (
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${cert.name} credential`}
                      className="w-8 h-8 inline-flex items-center justify-center rounded-md text-fg-3 hover:text-fg hover:bg-ink-800 transition-colors duration-150 ease-out"
                    >
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="meta mb-2">TalentSprint · Certificate ID 2237467 · Dec 2022 – May 2023</p>
          <h2 className="h-section">Java Full Stack Developer program</h2>
          <p className="text-sm leading-6 text-fg-2 mt-4 max-w-3xl">
            An intensive, industry-aligned full-stack Java web development program covering end-to-end
            application development, from foundational programming concepts through enterprise-grade web
            application architecture with Spring Boot and Angular. Graded Outstanding, in the top 20% of
            performers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {programModules.map((block) => (
              <div key={block.module} className="panel p-5">
                <h3 className="text-sm font-medium text-fg">{block.module}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {block.topics.map((topic) => (
                    <li key={topic} className="text-sm text-fg-2">{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="panel p-5 mt-4">
            <h3 className="text-sm font-medium text-fg">Capstone project</h3>
            <p className="text-sm leading-6 text-fg-2 mt-2 max-w-3xl">
              An end-to-end full-stack web application integrating an Angular frontend with a Spring Boot backend
              and SQL database, implementing CRUD operations, RESTful APIs, authentication and a responsive UI.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12 border-t border-line pt-10">
          <h2 className="text-base font-medium text-fg">Continuous learning</h2>
          <p className="text-sm leading-6 text-fg-2 max-w-3xl">
            From mechanical engineering to software development, cloud and AI, I keep learning by building
            applications, researching AI agents, competing in CTF events and working through labs on TryHackMe.
            I&apos;m currently studying for CompTIA Security+.
          </p>
        </section>
      </div>
    </>
  )
}
