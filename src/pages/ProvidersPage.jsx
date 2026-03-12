import { Helmet } from 'react-helmet-async';
import styles from './ProvidersPage.module.css';

const providers = [
  {
    name: "PeptideHealth Clinic",
    description: "A leading telemedicine platform specializing in peptide therapy protocols with board-certified physicians. Offers comprehensive lab work, ongoing monitoring, and pharmaceutical-grade peptides shipped directly to your door.",
    services: ["Telemedicine consultations", "Lab work & blood panels", "Custom peptide protocols", "Ongoing physician monitoring", "Direct-to-door shipping"],
    pricing: "$199 – $399/month",
    pros: ["Board-certified physicians", "Comprehensive lab work included", "Wide peptide selection"],
    cons: ["Higher monthly cost", "Requires subscription commitment"],
  },
  {
    name: "OptimizeRx Peptides",
    description: "An affordable online clinic focused on growth hormone-releasing peptides and recovery protocols. Great for those new to peptide therapy who want guidance without breaking the bank.",
    services: ["Virtual consultations", "Peptide prescriptions", "Basic lab panels", "Educational resources"],
    pricing: "$129 – $249/month",
    pros: ["Affordable entry point", "Beginner-friendly", "Fast onboarding"],
    cons: ["Smaller peptide selection", "Basic lab panels only"],
  },
  {
    name: "Vitality Peptide Center",
    description: "A premium concierge-style peptide therapy provider with both in-person and telemedicine options. Best for those who want personalized, high-touch care with in-depth consultations and advanced protocols.",
    services: ["In-person & telemedicine visits", "Advanced lab diagnostics", "Multi-peptide stacking protocols", "Quarterly health assessments", "Priority physician access"],
    pricing: "$349 – $599/month",
    pros: ["Most personalized approach", "Advanced protocols available", "In-person option"],
    cons: ["Premium pricing", "Limited availability in some states"],
  },
  {
    name: "PeptidesDirect",
    description: "A streamlined platform offering peptide prescriptions with minimal overhead. Designed for experienced users who know what they want and need a licensed physician to prescribe it.",
    services: ["Quick physician consultations", "Peptide prescriptions", "Compounding pharmacy partnerships"],
    pricing: "$99 – $199/month",
    pros: ["Lowest cost option", "Quick prescriptions", "No long-term commitment"],
    cons: ["Less physician interaction", "Best for experienced users", "Limited monitoring"],
  },
];

export default function ProvidersPage() {
  return (
    <section className="section section--mid page-enter">
      <Helmet>
        <title>Peptide Therapy Providers — Compare & Get Started | Peptides101.info</title>
        <meta name="description" content="Compare licensed peptide therapy providers. Find the right telemedicine clinic for your goals and budget with honest reviews and pricing." />
        <meta property="og:title" content="Peptide Therapy Providers — Compare & Get Started" />
        <meta property="og:description" content="Compare licensed peptide therapy providers with honest reviews and transparent pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peptides101.info/providers" />
      </Helmet>

      <div className="text-center" style={{ marginBottom: 16 }}>
        <h1 className="heading-2">Get Started with Peptide Therapy</h1>
        <p className="subtitle" style={{ maxWidth: 540, margin: '0 auto' }}>
          Compare licensed providers, see pricing, and find the right fit for your goals and budget.
        </p>
      </div>

      {/* Affiliate disclosure */}
      <div className={styles.disclosure}>
        <strong>Affiliate Disclosure:</strong> Peptides101.info may earn a commission when you
        sign up through our partner links, at no additional cost to you. This helps us keep this
        educational resource free. We only recommend providers we believe offer quality care.
      </div>

      <div className={styles.grid}>
        {providers.map((p, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.providerName}>{p.name}</h2>
              <div className={styles.pricing}>{p.pricing}</div>
            </div>

            <p className={styles.description}>{p.description}</p>

            <div className={styles.servicesLabel}>Services included:</div>
            <ul className={styles.servicesList}>
              {p.services.map((s, j) => (
                <li key={j} className={styles.serviceItem}>{s}</li>
              ))}
            </ul>

            <div className={styles.prosConsGrid}>
              <div>
                <div className={styles.prosLabel}>Pros</div>
                {p.pros.map((pro, j) => (
                  <div key={j} className={styles.proItem}>+ {pro}</div>
                ))}
              </div>
              <div>
                <div className={styles.consLabel}>Cons</div>
                {p.cons.map((con, j) => (
                  <div key={j} className={styles.conItem}>- {con}</div>
                ))}
              </div>
            </div>

            <button className={styles.ctaButton}>Visit Provider →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
