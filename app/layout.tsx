import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Realtime Chat',
  description: 'Application for users to chat with friends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="night" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
