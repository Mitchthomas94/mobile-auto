
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-48.png" sizes="48x48" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="AutoBooked AI" />
        <meta property="og:description" content="More conversations for your money — 15‑day free trial." />
        <meta property="og:image" content="/favicon-512.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Organization", "name": "AutoBooked AI", "url": "https://autobookedai.co.uk", "logo": "https://autobookedai.co.uk/favicon-512.png", "contactPoint": {"@type": "ContactPoint", "email": "hello@autobookedai.co.uk", "contactType": "customer service", "areaServed": "GB"}}) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
