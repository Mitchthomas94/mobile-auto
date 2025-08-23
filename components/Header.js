
import Link from 'next/link'

export default function Header(){
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo" style={{display:'flex', alignItems:'center', gap:12}}>
          <img src="/logo-horizontal.svg" width="210" height="64" alt="AutoBooked AI" />
        </Link>
        <nav aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/book" className="btn" style={{marginLeft:8}}>Start Free Trial</Link>
        </nav>
      </div>
    </header>
  )
}
