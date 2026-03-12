import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <section className="section page-enter" style={{ maxWidth: 600, textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Helmet>
        <title>Page Not Found — Peptides101.info</title>
        <meta name="description" content="The page you're looking for doesn't exist. Head back to Peptides101.info to continue learning about peptides." />
      </Helmet>

      <div style={{
        width: 80, height: 80, borderRadius: 20,
        background: 'var(--accent-light)', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontSize: 36, marginBottom: 24,
      }}>
        🔍
      </div>

      <h1 className="heading-2" style={{ marginBottom: 12 }}>Page Not Found</h1>

      <p className="subtitle" style={{ maxWidth: 400, margin: '0 auto 32px', lineHeight: 1.7 }}>
        The page you're looking for doesn't exist or may have been moved.
        Let's get you back on track.
      </p>

      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn--primary">Back to Home</Link>
        <Link to="/guide" className="btn btn--secondary">Browse Peptides</Link>
      </div>
    </section>
  );
}
