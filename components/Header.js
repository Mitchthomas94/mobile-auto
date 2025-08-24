import Image from 'next/image';

export default function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        {/* Brand */}
        <a href="/" className="brand" aria-label="AutoBooked AI">
          <Image 
            src="/logo-horizontal.svg" 
            alt="AutoBooked AI" 
            width={160}  // adjust as needed
            height={40}  // adjust as needed
            priority 
          />
        </a>

        {/* Links */}
        <nav className="nav-links" aria-label="Primary">
          <a href="/">Home</a>
          <a href="/how-it-works">How It Works</a>   {/* ✅ fixed link */}
          <a href="/pricing">Pricing</a>
          <a href="/industries">Industries</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* CTA */}
        <a href="/book" className="btn nav-cta">Start Free Trial</a>
      </div>
    </header>
  );
}
