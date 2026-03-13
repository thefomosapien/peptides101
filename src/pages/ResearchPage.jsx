import { Helmet } from 'react-helmet-async';
import { studies } from '../data/studies';
import InfographicPlaceholder from '../components/InfographicPlaceholder';
import { ResearchTimelineInfographic } from '../components/infographics';
import CTABanner from '../components/CTABanner';

export default function ResearchPage() {
  return (
    <section className="section page-enter" style={{ maxWidth: 860 }}>
      <Helmet>
        <title>Peptide Research — Real Studies from Medical Journals</title>
        <meta name="description" content="Real peptide studies from real medical journals, summarized in plain English. Understand what the science actually says about popular peptides." />
        <meta property="og:title" content="Peptide Research — Real Studies from Medical Journals" />
        <meta property="og:description" content="Real peptide studies from real medical journals, summarized in plain English." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://peptides101.info/research" />
      </Helmet>

      <div className="text-center" style={{ marginBottom: 40 }}>
        <h1 className="heading-2">The Research</h1>
        <p className="subtitle" style={{ maxWidth: 500, margin: '0 auto' }}>
          Real studies from real medical journals. We summarize the findings so you
          don't have to read 40-page papers.
        </p>
      </div>

      <ResearchTimelineInfographic />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {studies.map((s, i) => (
          <div key={i} className="card" style={{ padding: 24, display: 'flex', gap: 18 }}>
            <div style={{
              width: 44, height: 44, minWidth: 44, borderRadius: 12,
              background: 'var(--accent-light)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: 18,
              fontWeight: 600, color: 'var(--accent)',
            }}>
              {i + 1}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                <span className="badge badge--type">{s.type}</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 400 }}>
                  {s.year}
                </span>
              </div>
              <h4 style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--text)', margin: '0 0 4px' }}>
                {s.title}
              </h4>
              <div style={{
                fontSize: 13, color: 'var(--accent)', marginBottom: 8,
                fontStyle: 'italic', fontWeight: 400,
              }}>
                {s.journal}
              </div>
              <p className="body-text" style={{ margin: 0, fontSize: 13.5 }}>
                {s.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <CTABanner />
    </section>
  );
}
