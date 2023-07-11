import Head from 'next/head'
import './globals.css'
import { Orelega_One } from 'next/font/google'
import LoadAnimation from '@/components/load'

const orelega = Orelega_One({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: 'KasAtay',
  description: 'Enjoy Moroccan Tea & Stories',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orelega.className}>
        <LoadAnimation/>
        {children}
      </body>
    </html>
  )
}
