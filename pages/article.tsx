import '../styles/globals.css'

import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { articles } from '@/data/articles'
import Link from 'next/link'
import Image from 'next/image';


const Article: NextPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>Forensik.ai - Artikel</title>
        <meta name="description" content="Baca artikel terbaru tentang AI dan generative AI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto flex-grow p-6">
        <h1 className="text-4xl font-bold text-[#2C254F] mb-8 text-center">Recent Articles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#2C254F] mb-2">{article.title}</h2>
                <p className="text-gray-700 mb-4">{article.description}</p>
                <Link href={`/article/${article.id}`}>
                  <div className="inline-block bg-[#2C254F] text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-[#1e1c3f] transition duration-300">
                    Baca Selengkapnya
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Article
