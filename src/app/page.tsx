import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react'
import { nclCategories, nclReportUrl, nclSummary } from '@/data/ncl'
import { basePath, resumeUrl } from '@/data/site'

const stats = [
  { value: '1,000+', label: 'Users on apps I shipped' },
  { value: '5+', label: 'Web apps built' },
  { value: '3+', label: 'Years of experience' },
  { value: '99th', label: 'NCL percentile' },
]

const services = [
  {
    title: 'Full-stack development',
    description: 'Web and hybrid mobile applications end-to-end with Java, Spring Boot, React and Angular, from REST APIs and MySQL schemas to responsive interfaces.',
    tags: ['Java', 'Spring Boot', 'React', 'Angular', 'TypeScript'],
  },
  {
    title: 'Backend and APIs',
    description: 'Microservices and REST APIs with Spring Boot and Hibernate, OAuth 2.0 and JWT authentication, and performance work on systems serving more than 1,000 users.',
    tags: ['Spring Boot', 'Hibernate', 'OAuth 2.0', 'JWT', 'PostgreSQL'],
  },
  {
    title: 'Cloud infrastructure',
    description: 'Moving applications from local environments to AWS, with RDS for data, load balancing and auto scaling for availability during peak traffic.',
    tags: ['AWS', 'EC2', 'RDS', 'Lambda', 'SQS'],
  },
  {
    title: 'Applied AI',
    description: 'AI agents, LLM fine-tuning, tokenization and RAG pipelines, and the data preparation that makes model training work.',
    tags: ['Python', 'LLMs', 'RAG', 'pandas', 'NumPy'],
  },
  {
    title: 'Secure by default',
    description: 'A cybersecurity master’s and research on AI agent security mean authentication, least privilege and attack surface are part of the design, not an afterthought.',
    tags: ['IAM', 'Threat modeling', 'Splunk', 'ELK Stack'],
  },
]

const featured = [
  {
    title: 'WorkOnWheels (WOW)',
    kind: 'Personal project',
    description: 'Re-architected a Java, Spring Boot and Angular booking system and migrated it to AWS, with RDS, auto scaling and load balancing for peak booking periods.',
    tags: ['Spring Boot', 'Angular', 'AWS'],
  },
  {
    title: 'AI Voice Agent',
    kind: 'Academic project',
    description: 'Real-time voice agent combining speech recognition, language generation and text-to-speech with custom voice cloning.',
    tags: ['Python', 'LLMs', 'TTS'],
  },
  {
    title: 'Diabetes Risk Prediction',
    kind: 'Academic project',
    description: 'Random Forest model on a Kaggle dataset, using SMOTE to correct class imbalance for unbiased classification of high-risk patients.',
    tags: ['Python', 'Random Forest', 'SMOTE'],
  },
]

const topCategories = new Set(['Forensics', 'Open Source Intelligence', 'Cryptography'])

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-28 pb-16 sm:pt-32 lg:min-h-[min(100svh,880px)] lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center w-full">
          <div className="animate-rise">
            <p className="flex items-center gap-2 text-sm text-fg-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-positive" />
              Open to software development engineer roles
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium leading-[1.05] tracking-[-0.03em] text-fg max-w-[15ch]">
              Software developer building secure, full-stack and AI applications
            </h1>

            <p className="text-lg leading-7 text-fg-2 max-w-xl mt-6">
              I&apos;m Yogesh Botcha. I build with Java, Spring Boot, React and Angular, deploy on AWS and
              integrate LLMs into real services. I finished my M.S. at Columbus State University in May 2026
              and now develop AI agents there as a research intern.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <Link href="/projects" className="btn-primary">
                View projects
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Download size={16} strokeWidth={1.5} />
                Resume
              </a>
            </div>
          </div>

          <figure className="animate-rise [animation-delay:60ms] w-full max-w-sm mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-ink-850">
              <Image
                src={`${basePath}/Images/Yogesh.jpeg`}
                alt="Portrait of Yogesh Botcha"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 384px"
                className="object-cover"
              />
            </div>
            <figcaption className="meta mt-3 flex justify-between">
              <span>Columbus, GA</span>
              <span>AI Research Intern, CSU</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page pb-8">
        <dl className="grid grid-cols-2 lg:grid-cols-4 border-y border-line">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`py-6 px-4 sm:px-6 ${idx % 2 === 1 ? 'border-l border-line' : ''} ${idx >= 2 ? 'border-t lg:border-t-0 border-line' : ''} ${idx === 2 ? 'lg:border-l' : ''}`}
            >
              <dt className="text-sm text-fg-2">{stat.label}</dt>
              <dd className="text-3xl font-medium text-fg tabular-nums mt-2">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* What I do */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
          <div>
            <h2 className="h-section">What I build</h2>
            <p className="text-fg-2 mt-4 max-w-sm">
              Production web applications and the services behind them, with security and AI as part of
              the engineering rather than separate specialties.
            </p>
          </div>

          <ul className="divided border-t border-line">
            {services.map((service) => (
              <li key={service.title} className="py-6 grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-8">
                <h3 className="text-base font-medium text-fg">{service.title}</h3>
                <div>
                  <p className="text-sm leading-6 text-fg-2">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected projects */}
      <section className="container-page pb-16 sm:pb-24">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="h-section">Selected projects</h2>
          <Link href="/projects" className="link text-sm inline-flex items-center gap-1">
            All projects
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((project) => (
            <article key={project.title} className="panel p-6 flex flex-col">
              <span className="meta">{project.kind}</span>
              <h3 className="text-lg font-medium text-fg mt-3">{project.title}</h3>
              <p className="text-sm leading-6 text-fg-2 mt-3 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NCL report */}
      <section className="container-page pb-16">
        <div className="panel p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">
          <div className="flex flex-col">
            <p className="meta">National Cyber League · Fall 2025 team game</p>
            <p className="mt-6 text-fg tabular-nums">
              <span className="text-6xl font-medium tracking-[-0.03em] text-accent">{nclSummary.rank}th</span>
              <span className="text-xl text-fg-2 ml-2">of {nclSummary.teams}</span>
            </p>
            <p className="text-fg-2 mt-3">
              {nclSummary.percentile} percentile with Team ACM @ CSU. Top categories were Forensics, OSINT and
              Cryptography.
            </p>
            <a
              href={nclReportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link text-sm inline-flex items-center gap-1 mt-6 lg:mt-auto lg:pt-6 self-start"
            >
              Verify on Cyber Skyline
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          </div>

          <div>
            <div className="flex justify-between meta mb-4">
              <span>Category</span>
              <span>Points scored</span>
            </div>
            <ul className="flex flex-col gap-3">
              {nclCategories.map((cat) => {
                const lead = topCategories.has(cat.name)
                return (
                  <li key={cat.name} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1.5 items-baseline">
                    <span className={`text-sm ${lead ? 'text-fg' : 'text-fg-2'}`}>{cat.name}</span>
                    <span className="meta">
                      {cat.score}/{cat.max}
                    </span>
                    <div className="col-span-2 h-1 rounded-full bg-ink-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${lead ? 'bg-accent' : 'bg-fg-3/60'}`}
                        style={{ width: `${(cat.score / cat.max) * 100}%` }}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-8">
        <div className="panel p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="h-section">Hiring a software engineer?</h2>
            <p className="text-fg-2 mt-3 max-w-lg">
              I&apos;m looking for full-time software development roles, based in Columbus, GA and open to
              relocation or remote work.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact" className="btn-primary">
              Contact me
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
