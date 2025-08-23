
import Head from 'next/head'

export default function Page(){
  return (
    <>
    <Head>
        <title>Book a Demo — AutoBooked AI</title>
        <meta name="description" content="Book a demo with AutoBooked AI to see how our appointment-setting system works for your business." />
      </Head>

    <section className="container mt2">
      <h1 className="h1">Book a Demo</h1>
      <p className="subtle">A quick 20-minute call to see if we can fill your calendar. We'll cover ICP, channels, and expected meeting volume.</p>
      <div className="card aspect-video mt1">
        <iframe
          title="Calendly"
          src="https://calendly.com/auto-booked-ai/new-meeting"
          className="iframe"
        />
      </div>
    </section>
        </>
  )
}
