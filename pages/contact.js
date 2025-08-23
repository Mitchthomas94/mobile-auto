
import Head from 'next/head'

export default function Page(){
  return (
    <>
    <Head>
        <title>Contact — AutoBooked AI</title>
        <meta name="description" content="Contact AutoBooked AI to book a demo or learn how we can keep your calendar full of meetings." />
      </Head>

    <section className="container mt2">
      <h1 className="h1">Contact</h1>
      <form action="mailto:hello@autobookedai.co.uk" method="post" encType="text/plain" className="card" style={{display:'grid', gap:'0.75rem', gridTemplateColumns:'1fr 1fr'}}>
        <input name="name" placeholder="Name" required style={{padding:'.75rem', border:'1px solid #cbd5e1', borderRadius:10}}/>
        <input name="email" type="email" placeholder="Email" required style={{padding:'.75rem', border:'1px solid #cbd5e1', borderRadius:10}}/>
        <input name="phone" placeholder="Phone" style={{padding:'.75rem', border:'1px solid #cbd5e1', borderRadius:10, gridColumn:'1 / span 2'}}/>
        <textarea name="message" placeholder="Message" rows="6" required style={{padding:'.75rem', border:'1px solid #cbd5e1', borderRadius:10, gridColumn:'1 / span 2'}}/>
        <button className="btn" style={{gridColumn:'1 / span 2'}}>Send</button>
      </form>
      <p className="subtle">Prefer email? <a href="mailto:hello@autobookedai.co.uk">hello@autobookedai.co.uk</a></p>
    </section>
        </>
  )
}
