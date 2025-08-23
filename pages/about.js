import Head from 'next/head'

export default function AboutPage(){
  return (
    <>
      <Head>
        <title>About AutoBooked AI</title>
        <meta name="description" content="AutoBooked AI keeps your calendar filled with the right conversations. Human‑approved outreach, respectful messaging and clear reporting." />
      </Head>

      {/* Intro */}
      <section className="container section-pad section-contrast">
        <h1 className="h1">About AutoBooked AI</h1>
        <div className="card" style={{marginTop:'.75rem'}}>
          <p className="subtle">
            Good businesses shouldn’t struggle to start conversations. Too many owners pour time and money
            into ads, tools and manual outreach—then spend evenings chasing leads. We built AutoBooked AI to
            change that. Our mission is simple: keep your calendar filled with high‑quality meetings, every week.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="section-pad">
        <div className="container">
          <h3>Who we are</h3>
          <div className="grid2 mt1">
            <div className="card">
              <p className="subtle">
                We’re a UK‑based team combining <strong>AI automation with human expertise</strong>. AI handles the heavy lifting—
                sequencing, channel selection, reminders and scheduling—while real people approve responses,
                refine scripts and step in for nuanced conversations.
              </p>
            </div>
            <div className="card">
              <p className="subtle">
                This balance gives you the <strong>speed and scale of technology</strong> with the <strong>care and judgement of a switched‑on SDR</strong>.
                The result: respectful outreach that protects your brand and turns interest into booked meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-pad section-contrast">
        <div className="container">
          <h3>What we do</h3>
          <div className="grid4 mt1">
            <div className="card">
              <h4>Respectful outreach</h4>
              <p className="subtle">Tailored, brand‑safe messaging across email, LinkedIn and SMS.</p>
            </div>
            <div className="card">
              <h4>Conversation handling</h4>
              <p className="subtle">Replies managed like a switched‑on SDR with clear escalation rules.</p>
            </div>
            <div className="card">
              <h4>Meeting booking</h4>
              <p className="subtle">Qualified prospects scheduled directly into your calendar.</p>
            </div>
            <div className="card">
              <h4>Continuous improvement</h4>
              <p className="subtle">Weekly reviews to optimise targeting, scripts and show‑rates.</p>
            </div>
          </div>
          <div className="card mt1">
            <h4 style={{margin:'0 0 .25rem 0'}}>Clear reporting</h4>
            <p className="subtle" style={{margin:0}}>Transparent metrics so you always know the value we deliver.</p>
          </div>
        </div>
      </section>

      {/* Our vision */}
      <section className="section-pad">
        <div className="container">
          <h3>Our vision</h3>
          <div className="card">
            <p className="subtle">
              We’re building the most trusted, human‑centred appointment‑setting partner in the UK and beyond.
              Our goal is to help SMEs move from chasing leads to closing deals, expand into new regions with
              compliant outreach, and become the easy, reliable way to keep your sales calendar full.
            </p>
          </div>
        </div>
      </section>

      {/* Why clients choose us */}
      <section className="section-pad section-contrast">
        <div className="container">
          <h3>Why clients choose us</h3>
          <div className="grid4 mt1">
            <div className="card">
              <h4>No extra software</h4>
              <p className="subtle">We deliver conversations, not dashboards to manage.</p>
            </div>
            <div className="card">
              <h4>More conversation for your money</h4>
              <p className="subtle">Fair pricing, transparent billing and no surprises.</p>
            </div>
            <div className="card">
              <h4>Scales without headcount</h4>
              <p className="subtle">We operate like an extension of your sales team.</p>
            </div>
            <div className="card">
              <h4>Trial without risk</h4>
              <p className="subtle">15‑day free trial — cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container section-pad">
        <div className="card" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1rem',flexWrap:'wrap'}}>
          <div>
            <h3 style={{margin:'0 0 .25rem 0'}}>Ready to see it working?</h3>
            <p className="faint" style={{margin:0}}>Book a quick call and we’ll map out your first 30 days.</p>
          </div>
          <div style={{display:'flex',gap:8}}>
            <a href="/book" className="btn">Start Free Trial</a>
            <a href="/book" className="btn-outline">Book a Demo</a>
          </div>
        </div>
      </section>
    </>
  )
}
