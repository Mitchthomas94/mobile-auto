
import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Company</h4>
          <ul style={{listStyle:'none', padding:0, margin:0}}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li style={{opacity:.6}}>Careers</li>
          </ul>
        </div>
        <div>
          <h4>Product</h4>
          <ul style={{listStyle:'none', padding:0, margin:0}}>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/book">Book a Demo</Link></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul style={{listStyle:'none', padding:0, margin:0}}>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div style={{borderTop:'1px solid #e2e8f0'}}>
        <div className="container flex-between" style={{padding:'1rem 0'}}>
          <span>© AutoBooked AI, 2025</span>
          <a href="mailto:hello@autobookedai.co.uk">hello@autobookedai.co.uk</a>
        </div>
      </div>
    </footer>
  )
}
