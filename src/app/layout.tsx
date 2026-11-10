import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Yogesh Botcha | Software Developer',
  description: 'Software developer building secure full-stack and AI applications with Java, Spring Boot, React, Angular, AWS and LLMs. M.S. Columbus State University, May 2026. AI Research Intern at CSU.',
  keywords: ['software developer', 'software engineer', 'SDE', 'full-stack developer', 'java', 'spring boot', 'react', 'angular', 'aws', 'ai agents', 'yogesh botcha'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
