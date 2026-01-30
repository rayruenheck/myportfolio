import './styles/globals.scss'
import type { Metadata } from 'next'
import LayoutContent from './components/LayoutContent'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Ray Ruenheck | Full-Stack Developer',
  description: 'Computer Science student and R&D Intern specializing in full-stack development with Next.js, React, Django, and AWS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <LayoutContent>{children}</LayoutContent>
        </Providers>
      </body>
    </html>
  )
}
