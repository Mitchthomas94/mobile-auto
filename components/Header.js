import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="AutoBooked AI">
          <Image src="/logo-horizontal.svg" alt="AutoBooked AI" width={160} height={40} priority />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How It Works</a>
          <Link href="/pricing">Pricing</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/book" className="btn nav-cta">Start Free Trial</Link>
      </div>
    </header>
  );
}
