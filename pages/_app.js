
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import AnalyticsGate from '../components/AnalyticsGate'
import MobileStickyCTA from '../components/MobileStickyCTA'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <main className="pt-header">
        <Component {...pageProps} />
      </main>
      <AnalyticsGate/>
      <CookieBanner/><Footer/>
          <MobileStickyCTA/>
    </>
  )
}