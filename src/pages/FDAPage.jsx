import { Helmet } from 'react-helmet-async';
import { peptides } from '../data/peptides';
import InfographicPlaceholder from '../components/InfographicPlaceholder';
import { FDAApprovalProcessInfographic, FDAComparisonInfographic } from '../components/infographics';
import CTABanner from '../components/CTABanner';

export default function FDAPage() {
  const approved = peptides.filter((p) => p.fdaApproved);
  const notApproved = peptides.filter((p) => !p.fdaApproved);

  return (
    <section className="section section--mid page-enter">
      <Helmet>
        <title>FDA Peptide Approval Status — What's Approved & What Isn't</title>
        <meta name="description" content="Understand which peptides have FDA approval, which don't, and what those labels actually mean for your safety and access." />
        <meta property="og:title" content="FDA Peptide Approval Status — What's Approved & What Isn't" />
        <meta property="og:description" content="Understand which peptides have FDA approval, which don't, and what those labels actually mean for your safety and access." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://peptides101.info/fda" />
      </Helmet>

      <div className="text-center" style={{ marginBottom: 40 }}>
        <h1 className="heading-2">FDA Approval Status</h1>
        <p className="subtitle" style={{ maxWidth: 620, margin: '0 auto' }}>
          Understanding which peptides have FDA approval is important — but "not
          approved" doesn't always mean "not safe." Here's what the labels actually mean.
        </p>
      </div>

      <FDAApprovalProcessInfographic />

      {/* Approved explainer */}
      <div style={{
        background: '#E8F9F1', borderRadius: 14, border: '1px solid #B8E8D0',
        padding: 28, marginBottom: 18,
      }}>
        <h3 style={{
          fontSize: 14, fontWeight: 650, color: 'var(--accent)',
          marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1.2,
        }}>
          ✅ What "FDA Approved" Means
        </h3>
        <p className="body-text">
          The FDA has reviewed extensive clinical trial data proving the peptide is safe
          and effective for its approved use. Over 100 peptide-based drugs have received
          FDA approval since insulin in 1921, including medications for diabetes, cancer,
          cardiovascular disease, and more. Approval means testing in thousands of patients
          across multiple trial phases.
        </p>
      </div>

      {/* Not approved explainer */}
      <div style={{
        background: 'var(--amber-light)', borderRadius: 14, border: '1px solid #F0DCA0',
        padding: 28, marginBottom: 36,
      }}>
        <h3 style={{
          fontSize: 14, fontWeight: 650, color: 'var(--amber)',
          marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1.2,
        }}>
          ⚠️ What "Not FDA Approved" Means
        </h3>
        <p className="body-text">
          This doesn't automatically mean dangerous. It usually means large-scale human
          clinical trials haven't been completed — which is expensive and time-consuming.
          Many non-approved peptides have promising data and are widely used by physicians.
          Some are approved in other countries. Millions of Americans still use non-approved
          peptides through physicians or online retailers.
        </p>
      </div>

      <FDAComparisonInfographic />

      {/* Two-column list */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: 20,
      }}>
        <div>
          <h4 style={{ fontSize: 15, fontWeight: 650, color: 'var(--accent)', marginBottom: 14 }}>
            ✅ FDA-Approved in Our Guide
          </h4>
          {approved.map((p) => (
            <div key={p.id} style={{
              background: '#F2FBF6', border: '1px solid #D4EDDF',
              borderRadius: 12, padding: '12px 16px', marginBottom: 8,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ fontSize: 22 }}>{p.icon}</span>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text)' }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 350 }}>{p.category}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 15, fontWeight: 650, color: 'var(--amber)', marginBottom: 14 }}>
            ⚠️ Not FDA-Approved (But Widely Used)
          </h4>
          {notApproved.map((p) => (
            <div key={p.id} style={{
              background: '#FFFCF2', border: '1px solid #F0E4C0',
              borderRadius: 12, padding: '12px 16px', marginBottom: 8,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ fontSize: 22 }}>{p.icon}</span>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text)' }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 350 }}>{p.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
    </section>
  );
}
