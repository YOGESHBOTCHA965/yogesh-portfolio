import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Yogesh Botcha | Web Developer & Cybersecurity Professional',
  description: 'M.S. Cybersecurity student and full-stack web developer. Skilled in Java, Spring Boot, Python, SIEM tools, and security frameworks. NCL 99th percentile competitor.',
  keywords: ['web developer', 'cybersecurity', 'java', 'spring boot', 'portfolio', 'yogesh botcha', 'ncl', 'full-stack'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-primary text-white overflow-x-hidden">
        <div className="relative min-h-screen flex flex-col">
          {/* Background grid pattern */}
          <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none z-0" />
          <div className="fixed inset-0 bg-radial-glow pointer-events-none z-0" />
          
          <Navigation />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
