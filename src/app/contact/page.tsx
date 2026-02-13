'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, Clock, ArrowUpRight, Shield } from 'lucide-react'

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
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'yogeshbotcha@gmail.com',
      href: 'mailto:yogeshbotcha@gmail.com',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+1 (706) 912-0229',
      href: 'tel:+17069120229',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Columbus, GA, USA',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/yogeshbotcha', handle: '@yogeshbotcha' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/in/yogcha', handle: '/in/yogcha' },
    { icon: <Shield size={18} />, label: 'Cyber Skyline', href: 'https://cyberskyline.com/report/85UBQ8522G95', handle: 'NCL Report' },
  ]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="page-header">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 section-container">
          <p className="text-cyan-400 text-sm font-mono tracking-wider mb-4 uppercase">Connect</p>
          <h1 className="section-title">Get In Touch</h1>
          <div className="line-accent max-w-xs mx-auto my-6" />
          <p className="section-subtitle">
            Interested in web development or cybersecurity opportunities? I would love to hear from you.
            Drop me a message and I will get back to you promptly.
          </p>
        </div>
      </div>

      <div className="section-container pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="card-glass flex items-center gap-4 group p-5 hover:border-cyan-500/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-600 text-xs uppercase tracking-wider font-medium">{info.label}</p>
                    <p className="text-white text-sm font-medium truncate">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="card-glass">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                Social Profiles
              </h3>
              <div className="space-y-2.5">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-300 font-medium">{link.label}</p>
                      <p className="text-xs text-gray-600">{link.handle}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-gray-700 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card-glass">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-white">Available for work</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Currently open to full-time positions in Web Development and Cybersecurity.
                Based in Columbus, GA. Open to relocation and remote opportunities.
                I typically respond within 24 hours.
              </p>
            </div>

            {/* Target Roles */}
            <div className="card-glass">
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-violet-400" />
                Target Roles
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Web Developer', 'Cybersecurity Analyst', 'Full-Stack Developer', 'Security Engineer', 'SOC Analyst', 'IT Risk Analyst'].map((role, idx) => (
                  <span key={idx} className="tag text-[11px]">{role}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              <h2 className="text-xl font-bold text-white mb-1">Send a Message</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and I will be in touch.</p>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                  <p className="text-emerald-400 text-sm font-medium">Message sent successfully! I will get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Job opportunity, collaboration, etc."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 group"
                >
                  <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="card-glass text-center py-10 px-8">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mx-auto mb-4">
            <Clock size={20} />
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Quick Response Guaranteed</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Whether you have a quick question, need consultation, or want to discuss a web development
            or cybersecurity opportunity, feel free to reach out. I typically respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  )
}
