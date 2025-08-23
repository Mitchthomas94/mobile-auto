
import Link from 'next/link'

import Head from 'next/head'

export default function NotFound(){
  return (
    <>
    <Head><title>Not Found — AutoBooked AI</title><meta name='description' content='The page you’re looking for doesn’t exist or has moved.'/></Head>
      <section className="container mt2" style={{textAlign:'center'}}>
      <h1 className="h1">Page not found</h1>
      <p className="subtle">The page you’re looking for doesn’t exist or has moved.</p>
      <Link href="/" className="btn" style={{marginTop:'1rem'}}>Back to Home</Link>
    </section>
        </>
  )
}
