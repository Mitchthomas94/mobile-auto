
import Head from 'next/head'

export default function Page(){
  const tiers = [
    {name:'Starter', price:'£450/mo', features:['~15–20 meetings','Basic sequences & missed‑call text‑back','Weekly reporting'], cta:'Start free trial'},
    {name:'Growth', price:'£850/mo', features:['~30–35 meetings','Multi‑channel (email + LinkedIn + SMS)','AI + human reply handling','Show‑up reminders & rescheduling'], recommended:true, cta:'Most popular — start now'},
    {name:'Scale', price:'£1,650/mo', features:['~50–60 meetings','All Growth features + CRM integration','SDR handoff scripts + extra inbox/domain support'], cta:'Talk to us'},
  ];
  return (
    <>
    <Head>
        <title>Pricing — AutoBooked AI</title>
        <meta name="description" content="See our introductory appointment-setting packages. Starter, Growth, and Scale plans to fit your business." />
      </Head>

    <section className="container mt2">
      <h1 className="h1">Introductory Packages — More Conversations for Your Money</h1>
      <p className="subtle">As a new starter in the market, we’re offering reduced pricing for early adopters. <strong>Lock in your plan today — these rates won’t last forever.</strong></p>
      <div className="grid4 mt1" style={{gridTemplateColumns:'repeat(3,minmax(0,1fr))'}}>
        {tiers.map(t => (
          <div key={t.name} className="card" style={{borderColor: t.recommended ? 'var(--brand)' : '#e2e8f0', boxShadow: t.recommended ? '0 2px 10px rgba(37,99,235,.15)' : '0 1px 2px rgba(0,0,0,.04)'}}>
            <h3 style={{margin:'0 0 .5rem 0'}}>{t.name} {t.recommended && <span className="badge-rec">Recommended</span>}</h3>
            <div style={{color:'var(--brand)', fontWeight:800, fontSize:'1.5rem', marginBottom:'.5rem'}}>{t.price}</div>
            <ul className="checklist">
              {t.features.map((f,i)=>(<li key={i}>{f}</li>))}
            </ul>
            <a href="/book" className="btn" onClick={()=>window.gtag&&window.gtag('event','select_pricing',{plan:t.name})} style={{marginTop:'.75rem'}}>{t.cta}</a>
          </div>
        ))}
      </div>
      <div className="card mt1">⚡ Introductory rates available now — secure your package before pricing resets to full market rates.</div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Service",
          "name":"Appointment-setting service",
          "provider":{"@type":"Organization","name":"AutoBooked AI"},
          "areaServed":"GB",
          "offers":[
            {"@type":"Offer","name":"Starter","price":"450","priceCurrency":"GBP"},
            {"@type":"Offer","name":"Growth","price":"850","priceCurrency":"GBP"},
            {"@type":"Offer","name":"Scale","price":"1650","priceCurrency":"GBP"}
          ]
        })}}
      />
    </section>
        </>
  )
}
