import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Nav/page'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Child Health and Welfare Organization',
  description: 'Dev Workz Tz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Navbar/>
        {children}</body>
    </html>
  )
}
