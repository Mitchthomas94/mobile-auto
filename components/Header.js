export default function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        {/* Brand */}
        <a href="/" className="brand" aria-label="AutoBooked AI">
          <img src="/logo.svg" alt="AutoBooked AI" height="28" />
        </a>

        {/* Links */}
        <nav className="nav-links" aria-label="Primary">
          <a href="/">Home</a>
          <a href="/how">How It Works</a>
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
