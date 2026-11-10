import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const hobbies = [
  {
    title: 'Dance and choreography',
    description: 'Passionate dancer and choreographer. Served as Dance Choreographer for Akriti Cultural Club at CMRTC, and love expressing creativity through movement and performing at cultural events.',
  },
  {
    title: 'Cultural exchange',
    description: 'As President of India Club and E-Board member of International Club at CSU, I love bridging cultures, organizing multicultural events and bringing diverse communities together.',
  },
  {
    title: 'Leadership and community',
    description: 'I thrive in organizing events and leading teams. From student associations to cultural clubs, I enjoy creating spaces where people connect and grow together.',
  },
  {
    title: 'CTF and cyber challenges',
    description: 'Capture The Flag competitions are both my hobby and my passion. Ranked in the 99th percentile in NCL Fall 2025, and I love the thrill of solving security puzzles.',
  },
  {
    title: 'Continuous learning',
    description: 'Always exploring new technologies, frameworks and cybersecurity techniques through TryHackMe, online courses and hands-on projects.',
  },
  {
    title: 'Travel and exploration',
    description: 'Having moved from Hyderabad, India to Columbus, GA, I love exploring new places, cultures and cuisines.',
  },
]

const facts = [
  { label: 'Born in', value: 'Hyderabad, India' },
  { label: 'Currently in', value: 'Columbus, GA' },
  { label: 'Now', value: 'AI Research Intern, CSU' },
  { label: 'NCL rank', value: '67th of 4,214' },
  { label: 'First language', value: 'Java' },
  { label: 'Graduated', value: 'M.S., May 2026' },
  { label: 'Hidden talent', value: 'Dance choreography' },
  { label: 'Languages', value: 'English, Hindi, Telugu' },
]

const activities = [
  {
    role: 'President',
    org: 'India Club at Columbus State University',
    period: 'From Fall 2024',
    desc: 'Leading the cultural organization, organizing events that celebrate Indian heritage and foster cross-cultural understanding among the student body.',
  },
  {
    role: 'E-Board Member',
    org: 'International Club at Columbus State University',
    period: 'From Fall 2024',
    desc: 'Contributing to the executive board to organize multicultural events, welcome international students and build a supportive community on campus.',
  },
  {
    role: 'Joint Secretary and Dance Choreographer',
    org: 'Akriti Cultural Club, CMRTC',
    period: 'Undergraduate',
    desc: 'Managed club operations and choreographed dance performances for major cultural festivals.',
  },
  {
    role: 'Junior Secretary',
    org: 'Mechanical Engineering Students Association, CMRTC',
    period: 'Undergraduate',
    desc: 'Organized technical workshops, seminars and student networking events for the mechanical engineering department.',
  },
]

const values = [
  { title: 'Excellence', desc: 'Striving for the highest quality in everything, from code to community work.' },
  { title: 'Community', desc: 'Building bridges between cultures and creating inclusive spaces for everyone.' },
  { title: 'Growth', desc: 'Embracing new challenges and continuously evolving as a professional and person.' },
  { title: 'Impact', desc: 'Making meaningful contributions that protect people and improve their digital lives.' },
]

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <span className="path">~/about</span>
        <h1 className="h-page">About me</h1>
        <p className="lede">
          The person behind the portfolio: where I&apos;m from, what I do outside of work and what drives me.
        </p>
      </header>

      <div className="container-page flex flex-col gap-24">
        <section className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12">
          <h2 className="text-base font-medium text-fg">My story</h2>
          <div className="flex flex-col gap-4 text-base leading-7 text-fg-2 max-w-2xl">
            <p>
              I&apos;m <span className="text-fg">Yogesh Botcha</span>, a software developer originally from
              Hyderabad, India. I completed my Master&apos;s in Cybersecurity at Columbus State University in
              Georgia in May 2026. My path from mechanical engineering to software development reflects my belief
              that growth comes from taking on new challenges.
            </p>
            <p>
              During my undergraduate years at <span className="text-fg">CMR Technical Campus</span>, I discovered
              my love for technology and pivoted from mechanical engineering to software development. I completed
              a <span className="text-fg">Java Full Stack certification</span> and landed an internship at Shanti
              Switchgears, where I built microservices with Java and Spring Boot.
            </p>
            <p>
              My time at <span className="text-fg">Kyndryl</span> supporting enterprise IT showed me how much
              security matters in the systems people rely on, and motivated me to pursue an M.S. in Cybersecurity
              in the United States, so the software I build is secure by design.
            </p>
            <p>
              Today I&apos;m an <span className="text-fg">AI Research Intern at Columbus State University</span>,
              developing AI agents for cybersecurity tasks and evaluating them for security risks, while looking
              for my next role as a software development engineer. Outside of code I&apos;m a 99th percentile CTF
              competitor, President of the India Club at CSU and a dance choreographer.
            </p>
          </div>
        </section>

        <section>
          <h2 className="h-section mb-6">Quick facts</h2>
          <dl className="panel grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
            {facts.map((fact, idx) => (
              <div
                key={fact.label}
                className={`p-5 border-line ${idx % 2 === 1 ? 'border-l' : ''} ${idx >= 2 ? 'border-t' : ''} ${idx % 4 !== 0 ? 'lg:border-l' : 'lg:border-l-0'} ${idx >= 4 ? 'lg:border-t' : 'lg:border-t-0'}`}
              >
                <dt className="text-sm text-fg-3">{fact.label}</dt>
                <dd className="text-base text-fg mt-1">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="h-section mb-6">Hobbies and interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 border-t border-line pt-8">
            {hobbies.map((hobby) => (
              <div key={hobby.title}>
                <h3 className="text-base font-medium text-fg">{hobby.title}</h3>
                <p className="text-sm leading-6 text-fg-2 mt-2">{hobby.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="h-section mb-6">Leadership and activities</h2>
          <ol className="divided border-t border-line">
            {activities.map((activity) => (
              <li key={activity.role} className="py-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-12">
                <span className="meta text-fg-2">{activity.period}</span>
                <div>
                  <h3 className="text-base font-medium text-fg">{activity.role}</h3>
                  <p className="text-sm text-fg-2 mt-1">{activity.org}</p>
                  <p className="text-sm leading-6 text-fg-2 mt-3 max-w-2xl">{activity.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="h-section mb-6">What drives me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value) => (
              <div key={value.title} className="panel p-5">
                <h3 className="text-base font-medium text-fg">{value.title}</h3>
                <p className="text-sm leading-6 text-fg-2 mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="h-section">Say hello</h2>
            <p className="text-fg-2 mt-2 max-w-xl">
              Whether it&apos;s technology, a collaboration or a cultural event, I&apos;m always happy to meet new
              people.
            </p>
          </div>
          <Link href="/contact" className="btn-secondary shrink-0">
            Contact me
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </section>
      </div>
    </>
  )
}
