
import Head from 'next/head'

export default function Page(){
  return (
    <>
    <Head><title>How It Works — AutoBooked AI</title><meta name='description' content='Our simple flow: plan, launch, book, improve. Outreach + reply handling that fills your calendar.'/></Head>
      <section className="container mt2 section">
      <h1 className="h1">How It Works</h1>
      <p className="lead">
        We handle the outreach and replies so you don’t have to. Here’s the simple flow from “no pipeline” to “booked meetings.”
      </p>

      <div className="steps">
        <div className="step-card">
          <div className="badge">1</div>
          <div>
            <h3 className="step-title">Plan the offer & audience</h3>
            <p className="step-desc">Quick strategy call to confirm your ideal customer, winning offers and outcomes. We set expectations and timelines.</p>
          </div>
        </div>

        <div className="step-card">
          <div className="badge">2</div>
          <div>
            <h3 className="step-title">Build & connect channels</h3>
            <p className="step-desc">We configure sending domains/inboxes, warmup, tracking and calendar routing. Channels: email, LinkedIn and SMS (+ missed‑call text‑back).</p>
          </div>
        </div>

        <div className="step-card">
          <div className="badge">3</div>
          <div>
            <h3 className="step-title">Start respectful conversations</h3>
            <p className="step-desc">We launch targeted sequences and handle replies like a switched‑on SDR, with human approval on important threads.</p>
          </div>
        </div>

        <div className="step-card">
          <div className="badge">4</div>
          <div>
            <h3 className="step-title">Book & remind</h3>
            <p className="step-desc">Qualified prospects are scheduled straight into your calendar with smart reminders and easy rescheduling to reduce no‑shows.</p>
          </div>
        </div>

        <div className="step-card">
          <div className="badge">5</div>
          <div>
            <h3 className="step-title">Measure & improve</h3>
            <p className="step-desc">Short weekly summaries: conversations started, meetings booked, show‑rate, and what messages worked — then we iterate.</p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <p className="muted">Want to see this live on your calendar? Try the <strong>15‑day free trial</strong> — no obligation.</p>
    </section>
        </>
  )
}
