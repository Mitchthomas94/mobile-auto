
import Head from 'next/head'

export default function Page(){ 
  return (
    <>
      <Head>
        <title>Privacy Policy — AutoBooked AI</title>
        <meta name="description" content="How AutoBooked AI collects, uses, and protects personal data. GDPR-aligned, UK-focused." />
      </Head>

      <section className="container mt2">
        <h1 className="h1">Privacy Policy</h1>
        <p className="faint">Last updated: 23 August 2025</p>

        <h3>Who We Are</h3>
        <p className="pre">AutoBooked AI provides appointment-setting services. We are the controller of your personal data. You can contact us at hello@autobookedai.co.uk.</p>

        <h3>What Data We Collect</h3>
        <p className="pre">Contact details (name, email, phone, business information); data you provide via demo bookings, contact forms, or service onboarding; and technical data such as IP addresses, browser type, and cookies (if enabled).</p>

        <h3>Why We Collect It</h3>
        <p className="pre">To deliver our services and manage bookings; to communicate with you about demos, campaigns and updates; and to improve performance and user experience on our site.</p>

        <h3>Legal Basis</h3>
        <p className="pre">We process your data based on your consent, to perform a contract with you, or to comply with legal obligations.</p>

        <h3>Sharing Your Data</h3>
        <p className="pre">We share necessary data with trusted service providers (for example, Calendly for bookings and analytics tools for performance). We do not sell your data.</p>

        <h3>Data Retention</h3>
        <p className="pre">We keep data for up to 12 months after your last interaction unless longer retention is legally required.</p>

        <h3>Your Rights</h3>
        <p className="pre">You can request access, correction, deletion, restriction, or portability of your data, and object to certain processing. You may withdraw consent at any time. If you have concerns, you may lodge a complaint with the Information Commissioner’s Office (ICO) in the UK.</p>

        <h3>Cookies</h3>
        <p className="pre">We may use cookies or similar technologies for analytics and performance. You can disable these via your browser settings. See our Cookies section in this policy for more detail.</p>
      </section>
    </>
  ); 
}
