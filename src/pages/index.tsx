import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Home } from '@women/components'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Wander Women | Home</title>
      </Head>
      <main className={`grid ${inter.className}`}>
        <Home />
      </main>
    </>
  )
}
