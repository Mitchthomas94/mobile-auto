// pages/index.js
import Head from 'next/head'
import Link from 'next/link'

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"How does the 15‑day free trial work?","acceptedAnswer":{"@type":"Answer","text":"We launch a focused campaign so you can see replies, booked calls, and how we work. Cancel anytime within 15 days — no obligation."}},
    {"@type":"Question","name":"Do you sell leads?","acceptedAnswer":{"@type":"Answer","text":"No. We run respectful outreach on your behalf and book real conversations directly into your calendar."}},
    {"@type":"Question","name":"Which industries do you work with?","acceptedAnswer":{"@type":"Answer","text":"Agencies, clinics, property services, education, SaaS and trades — if conversations win clients in your world, we can help."}},
    {"@type":"Question","name":"How do you handle replies?","acceptedAnswer":{"@type":"Answer","text":"AI drafts responses and a human team approves and escalates important threads to you. Prospects always feel heard."}},
    {"@type":"Question","name":"Can you integrate with my CRM and calendar?","acceptedAnswer":{"@type":"Answer","text":"Yes — Google/Outlook calendars and CRMs like HubSpot or Salesforce. Bookings slot straight into your workflow."}},
    {"@type":"Question","name":"Is my data safe?","acceptedAnswer":{"@type":"Answer","text":"We’re GDPR‑aligned and follow best practice for permissions, opt‑outs and data protection."}},
    {"@type":"Question","name":"How fast can we launch?","acceptedAnswer":{"@type":"Answer","text":"Typically 5–7 working days after the kickoff call."}},
    {"@type":"Question","name":"Do you work outside the UK?","acceptedAnswer":{"@type":"Answer","text":"Yes; we adapt compliance and time‑zones per region."}},
    {"@type":"Question","name":"How do you measure success?","acceptedAnswer":{"@type":"Answer","text":"Booked appointments and show-up rates. You’ll receive a clear weekly report with meetings delivered."}},
    {"@type":"Question","name":"Can I cancel if it’s not working?","acceptedAnswer":{"@type":"Answer","text":"Yes — month‑to‑month after the free trial. Cancel anytime with 7 days’ notice before your next billing cycle."}},
    {"@type":"Question","name":"Do you need access to my CRM?","acceptedAnswer":{"@type":"Answer","text":"Not required. We can book straight to your calendar; CRM is optional."}},
    {"@type":"Question","name":"How do you avoid spam complaints?","acceptedAnswer":{"@type":"Answer","text":"Small‑batch domains, careful copy and fast unsubscribe handling keep complaint rates low."}},
    {"@type":"Question","name":"Who writes the outreach messages?","acceptedAnswer":{"@type":"Answer","text":"We draft with AI assistance, then a real person edits for clarity and compliance. You approve before launch."}},
    {"@type":"Question","name":"What if I already have an SDR?","acceptedAnswer":{"@type":"Answer","text":"We can complement your team — running extra inboxes, covering evenings/weekends, or acting as overflow capacity."}},
    {"@type":"Question","name":"Do you guarantee results?","acceptedAnswer":{"@type":"Answer","text":"No service can promise deals closed. We guarantee consistent outreach, human reply handling and transparent reporting."}},
    {"@type":"Question","name":"How soon will I see meetings?","acceptedAnswer":{"@type":"Answer","text":"Most clients see first appointments in week 2–3. By the end of month one, you’ll have a steady pipeline."}}
  ]
};

export default function Home() {
  return (
    <>
      <Head>
        <title>AutoBooked AI — Done‑for‑you appointment setting</title>
        <meta name="description" content="We handle outreach and replies, turning interest into booked meetings. 15‑day free trial." />
        <meta property="og:image" content="/favicon-512.png" />
        <link rel="canonical" href="https://autobookedai.co.uk/" />
      </Head>

      {/* Hero */}
      <section id="hero" className="container section-pad section-contrast" style={{ textAlign:'center' }}>
        <h1 className="h1">Done-for-you appointment setting — the smarter way to grow your pipeline.</h1>
        <p className="subtle" style={{ maxWidth: 780, margin:'0 auto 1rem' }}>
          We handle outreach and replies so you can focus on closing. <strong>Human‑approved responses</strong>, <strong>GDPR‑aligned</strong>, and <strong>cancel anytime</strong>.
        </p>
        <div style={{ display:'flex', gap:12, justifyContent:'center' }}>
          <Link href="/book" className="btn">Start Your 15‑Day Free Trial</Link>
          <Link href="/pricing" className="btn-outline">See Pricing</Link>
        </div>
        <div className="trust-row">
          <span>Works with</span>
          <ul>
            <li>Google Calendar</li>
            <li>Outlook</li>
            <li>HubSpot</li>
            <li>Salesforce</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad section-alt">
        <div className="container">
          <h3>Why choose AutoBooked AI</h3>
          <div className="grid4 mt1">
            <div className="card"><h4>Meetings, not vanity leads</h4><p className="subtle">We measure success by meetings delivered and show rates — not clicks or opens.</p></div>
            <div className="card"><h4>Human + automation</h4><p className="subtle">Speed from automation, quality from humans approving replies and key escalations.</p></div>
            <div className="card"><h4>Respectful outreach</h4><p className="subtle">No blasts. Tight targeting, clear opt‑outs and message testing that protects your brand.</p></div>
            <div className="card"><h4>Clear reporting</h4><p className="subtle">Weekly summaries: conversations started, meetings booked and actions to improve.</p></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad section-contrast">
        <div className="container">
          <h3>How it works</h3>
          <div className="grid3 mt1">
            <div className="card"><strong>1) Strategy</strong><p className="subtle">Define ICP, offers and outcomes.</p></div>
            <div className="card"><strong>2) Build</strong><p className="subtle">Domains, inboxes, reminders & routing.</p></div>
            <div className="card"><strong>3) Book</strong><p className="subtle">Outreach + reply handling → meetings.</p></div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad">
        <div className="container">
          <h3>Who we help</h3>
          <div className="chips">
            <span className="chip">Agencies</span>
            <span className="chip">Clinics</span>
            <span className="chip">Property Services</span>
            <span className="chip">Education</span>
            <span className="chip">SaaS</span>
            <span className="chip">Trades</span>
            <span className="chip">Car Mechanics</span>
          </div>
          <p className="faint" style={{marginTop:8}}>Don’t see your industry? <Link href="/contact">Contact us</Link>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container section-pad section-contrast" style={{ maxWidth: 1000 }}>
        <h3>FAQ</h3>
        <div className="faq-grid">
          <div>
            <details><summary>How does the 15‑day free trial work?</summary><div className="subtle">We launch a focused campaign so you can see replies, booked calls, and how we work. Cancel anytime within 15 days — no obligation.</div></details>
            <details><summary>Do you sell leads?</summary><div className="subtle">No. We run respectful outreach on your behalf and book real conversations directly into your calendar.</div></details>
            <details><summary>Which industries do you work with?</summary><div className="subtle">Agencies, clinics, property services, education, SaaS and trades. If conversations win clients in your world, we can help.</div></details>
            <details><summary>How do you handle replies?</summary><div className="subtle">AI drafts responses and a human team approves and escalates important threads to you.</div></details>
          </div>
          <div>
            <details><summary>Can you integrate with my CRM and calendar?</summary><div className="subtle">Yes — Google/Outlook calendars and CRMs like HubSpot or Salesforce.</div></details>
            <details><summary>Is my data safe?</summary><div className="subtle">We’re GDPR‑aligned and follow best practice for permissions, opt‑outs and data protection.</div></details>
            <details><summary>How fast can we launch?</summary><div className="subtle">Typically 5–7 working days after the kickoff call.</div></details>
            <details><summary>Can I cancel if it’s not working?</summary><div className="subtle">Yes — month‑to‑month after the free trial. 7 days’ notice before renewal.</div></details>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    </>
  )
}
