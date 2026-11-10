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
    company: 'Columbus State University',
    position: 'AI Research Intern',
    location: 'Columbus, Georgia',
    duration: 'Jul 2026 – Present',
    type: 'Internship',
    description: [
      'Develop AI agents designed to perform cybersecurity-related tasks as part of faculty-led research initiatives.',
      'Evaluate AI agents for security vulnerabilities, expanded attack surfaces and other potential cybersecurity risks.',
      'Build Python tooling around LLM APIs and agent tool calls so agent behavior can be tested and reproduced across experiments.',
    ],
    technologies: ['Python', 'AI Agents', 'LLMs', 'Tool Calling', 'Security Evaluation'],
  },
  {
    id: 2,
    company: 'Columbus State University',
    position: 'Graduate Administrative Assistant',
    location: 'Columbus, Georgia',
    duration: 'Jan 2025 – May 2026',
    type: 'Part-time',
    description: [
      'Contributed to university AI/ML research by cleaning datasets, fine-tuning Large Language Models (LLMs) and experimenting with image-generation models for academic branding.',
      'Applied data preprocessing, tokenization and model training workflows to improve research outcomes.',
      'Generated monthly KPI dashboards for 4 departments, giving management continuous insight into performance and compliance.',
    ],
    technologies: ['Python', 'LLM Fine-tuning', 'Tokenization', 'pandas', 'Data Pipelines'],
  },
  {
    id: 3,
    company: 'Columbus State University',
    position: 'Student Research Assistant',
    location: 'Columbus, Georgia',
    duration: 'Oct 2025 – Jan 2026',
    type: 'Part-time',
    description: [
      'Collaborated on a cybersecurity research project focused on advanced network intrusion detection methods.',
      'Developed and evaluated techniques to enhance system resilience against obfuscation and chaff-based evasion.',
    ],
    technologies: ['Intrusion Detection', 'Python', 'Network Security', 'Research'],
  },
  {
    id: 4,
    company: 'Kyndryl',
    position: 'Technical Support Analyst, Senior Agent',
    location: 'Hyderabad, India',
    duration: 'Oct 2023 – Jun 2024',
    type: 'Full-time',
    description: [
      'Managed user identity and access controls (IAM) through password resets and account provisioning, following the principle of least privilege.',
      'Conducted advanced network troubleshooting, ensuring SLA compliance and minimal downtime across enterprise IT environments.',
    ],
    technologies: ['IAM', 'Active Directory', 'Networking', 'ISO 27001'],
  },
  {
    id: 5,
    company: 'Shanti Switchgears Private Limited',
    position: 'Java Developer Intern',
    location: 'Hyderabad, India',
    duration: 'Jun 2022 – Jun 2023',
    type: 'Internship',
    description: [
      'Developed web and hybrid mobile applications for employees and vendors using Java, Angular and Spring Boot, integrating REST APIs and MySQL database operations through Hibernate.',
      'Implemented OAuth 2.0 and JWT authentication, resolved application and database issues, and optimized performance to support more than 1,000 users.',
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'Hibernate', 'MySQL', 'REST APIs', 'OAuth 2.0', 'JWT'],
  },
]

const earlier = [
  { position: 'Sport Player IT', company: 'Decathlon Sports India', duration: '2022', note: 'User acceptance testing of retail management systems and SQL data validation.' },
  { position: 'Marketing Intern', company: 'Adonmo', duration: '2022', note: 'Campaign tracking and analytics for a digital out-of-home advertising agency.' },
]

export default function ExperiencePage() {
  return (
    <>
      <header className="page-head">
        <span className="path">~/experience</span>
        <h1 className="h-page">Work experience</h1>
        <p className="lede">
          Java full-stack development, AI agent research and enterprise IT, across the U.S. and India.
        </p>
      </header>

      <div className="container-page">
        <ol className="divided border-t border-line">
          {experiences.map((exp) => {
            const current = exp.duration.includes('Present')
            return (
              <li key={exp.id} className="py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12">
                <div className="flex md:flex-col gap-x-3 gap-y-1 flex-wrap">
                  <span className="meta text-fg-2 flex items-center gap-2">
                    {current && <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-label="Current role" />}
                    {exp.duration}
                  </span>
                  <span className="meta">{exp.type}</span>
                </div>

                <div>
                  <h2 className="text-lg font-medium text-fg">{exp.position}</h2>
                  <p className="text-sm text-fg-2 mt-1">
                    {exp.company} <span className="text-fg-3">· {exp.location}</span>
                  </p>

                  <ul className="mt-5 flex flex-col gap-3 max-w-3xl">
                    {exp.description.map((item) => (
                      <li key={item} className="text-sm leading-6 text-fg-2 pl-4 relative">
                        <span className="absolute left-0 top-[11px] w-1.5 h-px bg-fg-3" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        <section className="border-t border-line py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12">
          <h2 className="text-base font-medium text-fg">Earlier experience</h2>
          <ul className="flex flex-col gap-4">
            {earlier.map((item) => (
              <li key={item.company} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1">
                <p className="text-sm text-fg">
                  {item.position} <span className="text-fg-2">· {item.company}</span>
                </p>
                <span className="meta">{item.duration}</span>
                <p className="text-sm text-fg-2 sm:col-span-2">{item.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="panel p-8 mt-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12">
          <h2 className="text-base font-medium text-fg">Summary</h2>
          <p className="text-sm leading-6 text-fg-2 max-w-3xl">
            Software developer specializing in secure, AI-powered applications and scalable full-stack solutions
            with Java, Spring Boot, React, Angular and SQL. Experienced in integrating LLMs, developing
            microservices and preparing data for AI-driven systems, with a cybersecurity background that keeps
            security part of the design.
          </p>
        </div>
      </div>
    </>
  )
}
