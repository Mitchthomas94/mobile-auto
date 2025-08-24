// components/Header.js
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
          <a href="/" onClick={(e)=>{e.preventDefault(); window.location.assign('/');}}>Home</a>

          <a
            href="/how-it-works"
            onClick={(e)=>{e.preventDefault(); window.location.assign('/how-it-works');}}
          >
            How It Works
          </a>

          <a href="/pricing" onClick={(e)=>{e.preventDefault(); window.location.assign('/pricing');}}>Pricing</a>
          <a href="/industries" onClick={(e)=>{e.preventDefault(); window.location.assign('/industries');}}>Industries</a>
          <a href="/about" onClick={(e)=>{e.preventDefault(); window.location.assign('/about');}}>About</a>
          <a href="/contact" onClick={(e)=>{e.preventDefault(); window.location.assign('/contact');}}>Contact</a>
        </nav>

        {/* CTA */}
        <a
          href="/book"
          className="btn nav-cta"
          onClick={(e)=>{e.preventDefault(); window.location.assign('/book');}}
        >
          Start Free Trial
        </a>
      </div>
    </header>
  );
}
