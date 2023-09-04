import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Youtube2nes',
  description: 'Youtube2nes Download mp3 easyway.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <header className='text-white'>Navbar Bölümü</header>
        {children}
        {/* Footer */}
        <footer className='text-white'>Footer Bölümü</footer>
      </body>
    </html>
  )
}
