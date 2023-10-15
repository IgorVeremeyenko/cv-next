import './globals.css'
import { Inter } from 'next/font/google'
import Layout from './components/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Resume | Ihor-Veremiienko',
  description: 'Ihor is a software engineer with 5 years of experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
        </body>
    </html>
  )
}
