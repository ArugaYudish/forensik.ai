import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { articles } from '@/data/articles'
import '../../styles/globals.css'
import Image from 'next/image';



const ArticleDetail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const article = articles.find(a => a.id === Number(id))

  if (!article) {
    return <p>Artikel tidak ditemukan</p>
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>{article.title} - Forensik.ai</title>
        <meta name="description" content={article.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto flex-grow p-6">
        <h1 className="text-4xl font-extrabold text-[#2C254F] mb-4">{article.title}</h1>
        <Image src={article.image} alt={article.title} className="w-full h-80 object-cover mb-6" />
        <p className="text-gray-700">{article.content}</p>
      </main>

      <Footer />
    </div>
  )
}

export default ArticleDetail
