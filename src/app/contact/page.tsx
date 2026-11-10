'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, ArrowUpRight, Shield, Download } from 'lucide-react'
import { resumeUrl } from '@/data/site'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: <Mail size={16} strokeWidth={1.5} />, label: 'Email', value: 'yogeshbotcha@gmail.com', href: 'mailto:yogeshbotcha@gmail.com' },
    { icon: <Phone size={16} strokeWidth={1.5} />, label: 'Phone', value: '+1 (706) 912-0229', href: 'tel:+17069120229' },
    { icon: <MapPin size={16} strokeWidth={1.5} />, label: 'Location', value: 'Columbus, GA, USA' },
  ]

  const socialLinks = [
    { icon: <Github size={16} strokeWidth={1.5} />, label: 'GitHub', href: 'https://github.com/YOGESHBOTCHA965', handle: '@YOGESHBOTCHA965' },
    { icon: <Linkedin size={16} strokeWidth={1.5} />, label: 'LinkedIn', href: 'https://linkedin.com/in/yogcha', handle: '/in/yogcha' },
    { icon: <Shield size={16} strokeWidth={1.5} />, label: 'Cyber Skyline', href: 'https://cyberskyline.com/report/85UBQ8522G95', handle: 'NCL report' },
  ]

  const targetRoles = ['Software Development Engineer', 'Software Engineer', 'Full-Stack Developer', 'Backend Engineer', 'Java Developer']

  const fields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', autoComplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', autoComplete: 'email' },
  ] as const

  return (
    <>
      <header className="page-head">
        <span className="path">~/contact</span>
        <h1 className="h-page">Get in touch</h1>
        <p className="lede">
          Hiring a software engineer? Send a message and I&apos;ll usually reply within 24 hours.
        </p>
      </header>

      <div className="container-page grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12">
        <aside className="flex flex-col gap-10">
          <p className="flex items-start gap-2 text-sm text-fg-2">
            <span className="w-1.5 h-1.5 rounded-full bg-positive mt-[7px] shrink-0" />
            Open to full-time software development engineer roles. Based in Columbus, GA and open to
            relocation or remote work.
          </p>

          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary self-start -mt-4">
            <Download size={16} strokeWidth={1.5} />
            Resume (PDF)
          </a>

          <ul className="panel divided">
            {contactInfo.map((info) => {
              const body = (
                <>
                  <span className="text-fg-3 w-4 shrink-0">{info.icon}</span>
                  <span className="text-sm text-fg-3 w-20 shrink-0">{info.label}</span>
                  <span className="text-sm text-fg truncate">{info.value}</span>
                </>
              )
              return (
                <li key={info.label}>
                  {info.href ? (
                    <a href={info.href} className="flex items-center gap-3 px-5 h-12 hover:bg-ink-800/60 transition-colors duration-150 ease-out">
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 px-5 h-12">{body}</div>
                  )}
                </li>
              )
            })}
          </ul>

          <div>
            <h2 className="text-sm text-fg-3 mb-3">Profiles</h2>
            <ul className="flex flex-col gap-1 -mx-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-3 h-10 rounded-lg hover:bg-ink-800 transition-colors duration-150 ease-out"
                  >
                    <span className="text-fg-3 w-4">{link.icon}</span>
                    <span className="text-sm text-fg">{link.label}</span>
                    <span className="meta">{link.handle}</span>
                    <ArrowUpRight size={16} strokeWidth={1.5} className="ml-auto text-fg-3 group-hover:text-fg transition-colors duration-150 ease-out" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm text-fg-3 mb-3">Target roles</h2>
            <div className="flex flex-wrap gap-2">
              {targetRoles.map((role) => (
                <span key={role} className="tag">{role}</span>
              ))}
            </div>
          </div>
        </aside>

        <div className="panel p-6 sm:p-8 self-start">
          <h2 className="h-section">Send a message</h2>

          {submitted && (
            <p role="status" className="mt-6 px-4 h-11 flex items-center gap-2 rounded-lg bg-positive/10 border border-positive/20 text-sm text-positive">
              <CheckCircle size={16} strokeWidth={1.5} />
              Message sent. I&apos;ll reply within 24 hours
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {fields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="label">{field.label}</label>
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    autoComplete={field.autoComplete}
                    className="input-field"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="subject" className="label">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Job opportunity, collaboration"
              />
            </div>

            <div>
              <label htmlFor="message" className="label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="input-field h-auto py-3 resize-none"
                placeholder="Tell me about the role or project"
              />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto sm:self-start">
              <Send size={16} strokeWidth={1.5} />
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
