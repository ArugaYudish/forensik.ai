
import '../styles/globals.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>Forensik.ai - Detect AI-Generated Content</title>
        <meta name="description" content="Forensik.ai helps you detect whether a photo or video is AI-generated or not." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-5xl font-bold text-[#2C254F] mb-4">
          Forensik.ai
        </h1>
        <p className="text-xl text-gray-700 mb-8">
        lets create a safe digital world and detect whether a photo or video is AI-generated or not.        </p>
        <Image src="/images/ai2.jpeg" alt="AI Detection" className="w-1/2 max-w-3xl h-auto mb-8 rounded-lg shadow-lg" />
        <Link href="/detect" className="inline-block bg-[#2C254F] text-white text-lg font-semibold py-3 px-6 rounded-lg shadow hover:bg-[#1e1c3f] transition duration-300">
          Try Forensic the Content
        </Link>
      </main>

      <Footer />
    </div>
  )
}

export default Home
