// pages/how-it-works.js
import Head from 'next/head'

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>How It Works — AutoBooked AI</title>
        <meta
          name="description"
          content="Our simple flow: plan, launch, book, improve. Outreach + reply handling that fills your calendar."
        />
      </Head>

      {/* BUILD OK v3 */}
      <section className="container mt2 section">
        <h1 className="h1">How It Works</h1>
        <p className="lead">
          We handle the outreach and replies so you don’t have to. Here’s the simple flow from “no pipeline” to “booked meetings.”
        </p>

        <div className="steps">
          {/* ... your steps unchanged ... */}
        </div>

        <div className="divider"></div>

        <p className="muted">
          Want to see this live on your calendar? Try the <strong>15-day free trial</strong> — no obligation.
        </p>
      </section>
    </>
  );
}
