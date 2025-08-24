// pages/_app.js
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import AnalyticsGate from '../components/AnalyticsGate'
import MobileStickyCTA from '../components/MobileStickyCTA'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  // 🔒 Safety: if anything ever hits /how, send it to /how-it-works
  useEffect(() => {
    if (router.asPath === '/how') {
      router.replace('/how-it-works')
    }
  }, [router.asPath])

  return (
    <>
      <Header/>
      <main className="pt-header">
        <Component {...pageProps} />
      </main>
      <AnalyticsGate/>
      <CookieBanner/>
      <Footer/>
      <MobileStickyCTA/>
    </>
  )
}
