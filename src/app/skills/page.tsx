const skillGroups = [
  {
    name: 'Languages',
    lead: ['Java', 'Python', 'TypeScript', 'JavaScript'],
    rest: ['Go', 'Rust', 'C', 'C++', 'SQL'],
  },
  {
    name: 'Frameworks and web',
    lead: ['Spring Boot', 'React', 'Angular'],
    rest: ['Hibernate', 'Spring JPA', 'REST APIs', 'Next.js', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    name: 'Cloud and systems',
    lead: ['AWS'],
    rest: ['ECS', 'Lambda', 'RDS', 'SQS', 'API Gateway', 'Amplify', 'EC2', 'S3', 'Azure', 'Linux', 'Docker', 'VMware'],
  },
  {
    name: 'Databases and tools',
    lead: ['PostgreSQL', 'MySQL', 'Git'],
    rest: ['Redshift', 'Splunk', 'ELK Stack', 'CI/CD'],
  },
  {
    name: 'AI and data',
    lead: ['LLM Fine-tuning', 'RAG', 'AI Agents'],
    rest: ['Tokenization', 'pandas', 'NumPy', 'Tableau', 'Power BI'],
  },
  {
    name: 'Security',
    lead: ['OAuth 2.0', 'JWT', 'IAM'],
    rest: ['Threat Modeling (STRIDE)', 'NIST RMF', 'Incident Response', 'Wireshark', 'ISO 27001', 'AI Agent Security'],
  },
]

const practices = [
  {
    title: 'Engineering practice',
    items: ['Microservice and REST API design', 'Authentication and authorization', 'Performance tuning', 'Cloud migration', 'Debugging and root-cause analysis'],
  },
  {
    title: 'Working style',
    items: ['Cross-functional collaboration', 'Technical writing', 'Mentoring', 'Event and team leadership', 'CTF competitions'],
  },
  {
    title: 'Security mindset',
    items: ['Least privilege by default', 'Attack surface review', 'Threat monitoring', 'Audit readiness', 'Vulnerability analysis'],
  },
]

export default function SkillsPage() {
  return (
    <>
      <header className="page-head">
        <span className="path">~/skills</span>
        <h1 className="h-page">Technical skills</h1>
        <p className="lede">
          The languages, frameworks and platforms I build with, grouped by where they sit in the stack. The ones
          I use most are listed first in each group.
        </p>
      </header>

      <div className="container-page flex flex-col gap-24">
        <section className="divided border-t border-line">
          {skillGroups.map((group) => (
            <div key={group.name} className="py-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12">
              <h2 className="text-base font-medium text-fg">{group.name}</h2>
              <div className="flex flex-wrap gap-2">
                {group.lead.map((skill) => (
                  <span key={skill} className="tag text-fg border-fg-3/40">{skill}</span>
                ))}
                {group.rest.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-line pt-10">
          {practices.map((comp) => (
            <div key={comp.title}>
              <h2 className="text-base font-medium text-fg mb-4">{comp.title}</h2>
              <ul className="flex flex-col gap-2">
                {comp.items.map((item) => (
                  <li key={item} className="text-sm text-fg-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12 border-t border-line pt-10">
          <h2 className="text-base font-medium text-fg">Currently</h2>
          <p className="text-sm leading-6 text-fg-2 max-w-3xl">
            Building and evaluating AI agents as an AI Research Intern at Columbus State University, and
            studying for CompTIA Security+.
          </p>
        </section>
      </div>
    </>
  )
}
