
import Link from 'next/link'

export default function StickyCTA(){
  return (
    <div className="sticky-cta">
      <Link href="/book" className="btn" onClick={()=>window.gtag&&window.gtag("event","start_trial")}>Start 15‑Day Free Trial</Link>
    </div>
  )
}
