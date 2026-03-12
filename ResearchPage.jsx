import { studies } from '../data/studies';
import InfographicPlaceholder from '../components/InfographicPlaceholder';

export default function ResearchPage() {
  return (
    <section className="section" style={{ maxWidth: 860 }}>
      <div className="text-center" style={{ marginBottom: 40 }}>
        <h2 className="heading-2">The Research</h2>
        <p className="subtitle" style={{ maxWidth: 500, margin: '0 auto' }}>
          Real studies from real medical journals. We summarize the findings so you
          don't have to read 40-page papers.
        </p>
      </div>

      <InfographicPlaceholder
        id="research-timeline"
        title="Peptide Research Timeline"
        description="A visual timeline from insulin's discovery in 1921 through 100+ FDA-approved peptides today, with major milestones highlighted."
        aspectRatio="16/5"
      />

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
    </section>
  );
}
