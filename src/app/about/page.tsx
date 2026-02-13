'use client'

import { Heart, Music, Globe2, Users, Dumbbell, BookOpen, Camera, Gamepad2, Utensils, Plane, Star, Award, Sparkles } from 'lucide-react'

interface HobbyItem {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const hobbies: HobbyItem[] = [
  {
    icon: <Music size={24} />,
    title: 'Dance & Choreography',
    description: 'Passionate dancer and choreographer - served as Dance Choreographer for Akriti Cultural Club at CMRTC. Love expressing creativity through movement and performing at cultural events.',
    color: 'violet',
  },
  {
    icon: <Globe2 size={24} />,
    title: 'Cultural Exchange',
    description: 'As President of India Club and E-Board member of International Club at CSU, I love bridging cultures, organizing multicultural events, and bringing diverse communities together.',
    color: 'cyan',
  },
  {
    icon: <Users size={24} />,
    title: 'Leadership & Community',
    description: 'Natural leader who thrives in organizing events and leading teams. From student associations to cultural clubs, I enjoy creating spaces where people connect and grow together.',
    color: 'emerald',
  },
  {
    icon: <Gamepad2 size={24} />,
    title: 'CTF & Cyber Challenges',
    description: 'Competing in Capture The Flag cybersecurity competitions is both my hobby and my passion. Ranked 99th percentile in NCL Fall 2025 - I love the thrill of solving security puzzles.',
    color: 'amber',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies, frameworks, and cybersecurity techniques through TryHackMe, online courses, and hands-on projects. Learning is a lifestyle, not just a phase.',
    color: 'cyan',
  },
  {
    icon: <Plane size={24} />,
    title: 'Travel & Exploration',
    description: 'Having moved from Hyderabad, India to Columbus, GA, I love exploring new places, cultures, and cuisines. Every new city is an adventure waiting to happen.',
    color: 'violet',
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case 'violet': return { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20' }
    case 'cyan': return { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' }
    case 'emerald': return { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' }
    case 'amber': return { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' }
    default: return { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' }
  }
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="page-header">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-violet-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 section-container">
          <p className="text-cyan-400 text-sm font-mono tracking-wider mb-4 uppercase">Personal</p>
          <h1 className="section-title">About Me</h1>
          <div className="line-accent max-w-xs mx-auto my-6" />
          <p className="section-subtitle">
            Beyond the code and security tools - get to know the person behind the portfolio.
            My interests, passions, and what drives me every day.
          </p>
        </div>
      </div>

      <div className="section-container pt-0">
        {/* About Me Story */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Heart size={22} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">My Story</h2>
                </div>

                <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <p>
                    I&apos;m <span className="text-white font-semibold">Yogesh Botcha</span>, originally from 
                    <span className="text-cyan-400"> Hyderabad, India</span>, now pursuing my Master&apos;s in Cybersecurity at 
                    <span className="text-cyan-400"> Columbus State University, Georgia</span>. My journey from Mechanical
                    Engineering to Cybersecurity and Web Development reflects my belief that growth comes from 
                    embracing new challenges.
                  </p>
                  <p>
                    During my undergraduate years at <span className="text-white">CMR Technical Campus</span>, I discovered my love for 
                    technology and pivoted from mechanical engineering to software development. I completed a 
                    <span className="text-white"> Java Full Stack certification</span> and landed an internship at Shanti Switchgears, 
                    where I built microservices with Java and Spring Boot.
                  </p>
                  <p>
                    My time at <span className="text-white">Kyndryl</span> as a Technical Support Analyst deepened my passion for 
                    cybersecurity. Resolving 250+ high-severity incidents and working on ISO 27001 compliance 
                    showed me the critical importance of security in enterprise environments. This experience 
                    motivated me to pursue an M.S. in Cybersecurity in the United States.
                  </p>
                  <p>
                    Today, I&apos;m a <span className="text-white">99th percentile CTF competitor</span> in the National Cyber League, 
                    President of the India Club at CSU, and an active contributor to the international student 
                    community. I bring the same energy and dedication to everything I do - whether it&apos;s 
                    writing code, analyzing threats, or choreographing a dance performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-2">
              <Sparkles size={24} className="text-amber-400" />
              Quick Facts
            </h2>
            <p className="text-gray-500 text-sm">A few things that make me, me</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { emoji: '🇮🇳', label: 'Born in', value: 'Hyderabad, India' },
              { emoji: '🇺🇸', label: 'Currently in', value: 'Columbus, GA' },
              { emoji: '🎓', label: 'Studying', value: 'M.S. Cybersecurity' },
              { emoji: '🏆', label: 'NCL Rank', value: '67th / 4,214' },
              { emoji: '💻', label: 'First Language', value: 'Java' },
              { emoji: '🔐', label: 'Passion', value: 'Cybersecurity' },
              { emoji: '💃', label: 'Hidden Talent', value: 'Dance Choreography' },
              { emoji: '🌍', label: 'Languages', value: 'English, Hindi, Telugu' },
            ].map((fact, idx) => (
              <div key={idx} className="card-glass text-center py-6 group hover:scale-[1.02] transition-transform">
                <span className="text-3xl mb-3 block">{fact.emoji}</span>
                <p className="text-gray-600 text-[10px] uppercase tracking-wider font-medium mb-1">{fact.label}</p>
                <p className="text-white text-sm font-semibold">{fact.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies & Interests */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Hobbies & Interests</h2>
            <p className="text-gray-500 text-sm">What I love doing outside of work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, idx) => {
              const colors = getColorClasses(hobby.color)
              return (
                <div key={idx} className="card group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`} />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      {hobby.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{hobby.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{hobby.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Extracurriculars & Leadership */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Leadership & Activities</h2>
            <p className="text-gray-500 text-sm">Roles and responsibilities beyond academics</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                role: 'President',
                org: 'India Club at Columbus State University',
                period: 'Fall 2024 – Present',
                desc: 'Leading the cultural organization, organizing events that celebrate Indian heritage and foster cross-cultural understanding among the student body.',
              },
              {
                role: 'E-Board Member',
                org: 'International Club at Columbus State University',
                period: 'Fall 2024 – Present',
                desc: 'Contributing to the executive board to organize multicultural events, welcome international students, and build a supportive community on campus.',
              },
              {
                role: 'Joint Secretary & Dance Choreographer',
                org: 'Akriti Cultural Club, CMRTC',
                period: 'Undergraduate',
                desc: 'Managed club operations and choreographed dance performances for major cultural festivals, blending creativity with organizational skills.',
              },
              {
                role: 'Junior Secretary',
                org: 'Mechanical Engineering Students Association, CMRTC',
                period: 'Undergraduate',
                desc: 'Organized technical workshops, seminars, and student networking events for the mechanical engineering department.',
              },
            ].map((activity, idx) => (
              <div key={idx} className="card-glass group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {activity.role}
                    </h3>
                    <p className="text-cyan-400/80 text-sm font-semibold">{activity.org}</p>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-500 text-xs font-mono whitespace-nowrap">
                    {activity.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{activity.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">What Drives Me</h2>
            <p className="text-gray-500 text-sm">Core values that shape my work and life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Star size={22} />, title: 'Excellence', desc: 'Striving for the highest quality in everything - from code to community work.' },
              { icon: <Users size={22} />, title: 'Community', desc: 'Building bridges between cultures and creating inclusive spaces for everyone.' },
              { icon: <BookOpen size={22} />, title: 'Growth', desc: 'Embracing new challenges and continuously evolving as a professional and person.' },
              { icon: <Award size={22} />, title: 'Impact', desc: 'Making meaningful contributions that protect people and improve their digital lives.' },
            ].map((value, idx) => (
              <div key={idx} className="card-glass text-center py-8 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Personal CTA */}
        <div className="card-glass text-center py-12 px-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-cyan-500/8 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Let&apos;s Connect!</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              Whether you want to talk about technology, collaboration, cultural events, or just want
              to say hello - I&apos;m always happy to connect with new people. Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
