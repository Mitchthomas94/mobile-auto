
import Head from 'next/head'

export default function Page(){
  return (
    <>
    <Head>
        <title>Industries — AutoBooked AI</title>
        <meta name="description" content="We serve trades, healthcare, and professional services with tailored appointment-setting outreach." />
      </Head>

    <section className="container mt2">
      <h1 className="h1">Industries We Serve</h1>
      <p className="subtle">We focus on sectors where consistent appointments drive growth. Each niche gets tailored outreach and follow‑up.</p>

      {/* Trades & Local Services */}
      <div className="section">
        <h2>🔧 Trades & Local Services</h2>
        <div className="grid3">
          <div className="card">
            <h3 className="card-title"><span className="icon">🔧</span> Car Mechanics</h3>
            <p className="subtle">Keep MOT & servicing calendars full.</p>
          </div>
          <div className="card">
            <h3 className="card-title"><span className="icon">🚗</span> Tyre Garages</h3>
            <p className="subtle">Seasonal swaps & replacements booked in.</p>
          </div>
          <div className="card">
            <h3 className="card-title"><span className="icon">💧</span> Plumbing & Heating</h3>
            <p className="subtle">Boilers, emergencies, installs scheduled.</p>
          </div>
          <div className="card">
            <h3 className="card-title"><span className="icon">💡</span> Electrical & Renovation Trades</h3>
            <p className="subtle">Qualify bigger projects & site visits.</p>
          </div>
        </div>
      </div>

      {/* Healthcare & Wellbeing */}
      <div className="section">
        <h2>🏥 Healthcare & Wellbeing</h2>
        <div className="grid3">
          <div className="card">
            <h3 className="card-title"><img src="/icons/tooth.svg" alt="" width="20" height="20" /> Dentists & Orthodontists</h3>
            <p className="subtle">Convert enquiries into paid consultations, reduce no‑shows.</p>
          </div>
          <div className="card">
            <h3 className="card-title"><span className="icon">🏥</span> Private Clinics (GP, physio, wellness)</h3>
            <p className="subtle">Turn patient interest into booked slots.</p>
          </div>
          <div className="card">
            <h3 className="card-title"><span className="icon">💄</span> Aesthetics & Beauty Clinics</h3>
            <p className="subtle">Fill treatment diaries & encourage rebooking.</p>
          </div>
        </div>
      </div>

      {/* Business & Professional Services */}
      <div className="section">
        <h2>📈 Business & Professional Services</h2>
        <div className="grid3">
          <div className="card">
            <h3 className="card-title"><img src="/icons/house.svg" alt="" width="20" height="20" /> Property Services</h3>
            <p className="subtle">Consistent valuations & landlord appointments.</p>
          </div>
          <div className="card">
            <h3 className="card-title"><img src="/icons/target.svg" alt="" width="20" height="20" /> B2B Agencies</h3>
            <p className="subtle">Director‑level conversations in niche sectors.</p>
          </div>
          <div className="card">
            <h3 className="card-title"><img src="/icons/laptop.svg" alt="" width="20" height="20" /> SaaS & Tech</h3>
            <p className="subtle">ICP‑driven outreach that converts to demos.</p>
          </div>
          <div className="card">
            <h3 className="card-title"><img src="/icons/briefcase.svg" alt="" width="20" height="20" /> Professional Services</h3>
            <p className="subtle">Accountants, solicitors & consultants with warm outreach.</p>
          </div>
        </div>
      </div>

      <div className="card mt2" style={{textAlign:'center'}}>
        Don’t see your industry? <a href="/book">Book a demo</a> — we’ll tailor it to you.
      </div>
    </section>
        </>
  )
}
