
import Head from 'next/head'

export default function Page(){ 
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions — AutoBooked AI</title>
        <meta name="description" content="Terms of service for AutoBooked AI: scope, fees, free trial, responsibilities, and governing law." />
      </Head>

      <section className="container mt2">
        <h1 className="h1">Terms &amp; Conditions</h1>
        <p className="faint">Last updated: 23 August 2025</p>

        <h3>1. Introduction</h3>
        <p className="pre">These Terms and Conditions govern your use of AutoBooked AI’s appointment-setting services. By starting a free trial, demo, or paid subscription you agree to these Terms.</p>

        <h3>2. Scope of Services</h3>
        <p className="pre">We provide outreach, reply handling, and appointment-setting tailored to your customer profile. We do not sell leads; our service is focused on booked appointments.</p>

        <h3>3. Fees &amp; Payments</h3>
        <p className="pre">Introductory pricing may be available to early clients. Subscriptions are billed monthly in advance. Payments are due by invoice or card payment on the agreed schedule. You may cancel with at least 7 days’ notice before the next billing cycle.</p>

        <h3>4. Free Trial</h3>
        <p className="pre">The 15-day trial is free of charge. If you continue beyond the trial, fees will apply as per your chosen plan. You may cancel any time during the trial without charge.</p>

        <h3>5. Client Responsibilities</h3>
        <p className="pre">You agree to provide access to inboxes, sending domains, and calendars where required; approve campaign messaging promptly; and ensure compliance with any industry-specific regulations that apply to your business.</p>

        <h3>6. Liability</h3>
        <p className="pre">We deliver services with reasonable skill and care. To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential loss. Our total liability is capped at the fees you have paid in the preceding three months.</p>

        <h3>7. Intellectual Property</h3>
        <p className="pre">Campaign materials and templates created by us remain our property. You may use them for your business once all invoices are paid.</p>

        <h3>8. Governing Law</h3>
        <p className="pre">These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      </section>
    </>
  ); 
}
