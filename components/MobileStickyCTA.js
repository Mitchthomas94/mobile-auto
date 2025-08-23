
import Link from 'next/link'

export default function MobileStickyCTA(){
  return (
    <div className="mobile-cta" role="region" aria-label="Start trial">
      <div className="mobile-cta-inner">
        <Link href="/book" className="btn" onClick={()=>window.gtag&&window.gtag('event','start_trial_mobile')}>
          Start 15‑Day Free Trial
        </Link>
      </div>
    </div>
  )
}
