import { Link } from 'react-router-dom';
import InfographicPlaceholder from '../components/InfographicPlaceholder';
import CTABanner from '../components/CTABanner';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <div className="badge badge--type" style={{ marginBottom: 28 }}>
          Your free, no-nonsense peptide education
        </div>

        <h1 className="heading-1" style={{ marginBottom: 24 }}>
          Peptides are changing lives.{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            Let's make sense of&nbsp;them.
          </span>
        </h1>

        <p className="subtitle" style={{ fontSize: 18, maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.75 }}>
          No jargon. No hype. Just clear, honest education about one of the most
          talked-about breakthroughs in modern health and wellness.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/learn" className="btn btn--primary">Start Learning →</Link>
          <Link to="/quiz" className="btn btn--secondary">Take the Quiz</Link>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 56, marginTop: 64, flexWrap: 'wrap' }}>
          {[
            { num: '100+', label: 'FDA-Approved Peptides' },
            { num: '10M+', label: 'Americans Exploring Peptides' },
            { num: '$328M', label: 'In Peptide Imports (2025)' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 500, color: 'var(--accent)' }}>
                {s.num}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <InfographicPlaceholder
          id="hero-overview"
          title="What Are Peptides? — Visual Overview"
          description="An at-a-glance infographic showing amino acid chains, how peptides differ from proteins, and the key categories of therapeutic peptides."
          aspectRatio="16/7"
        />
      </section>

      {/* Quick preview cards linking to sections */}
      <section style={{ padding: '0 24px 80px', maxWidth: 960, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          {[
            { to: '/learn', emoji: '📖', title: 'Peptides 101', desc: 'Start with the basics — what they are, how they work, and whether they\'re safe.' },
            { to: '/guide', emoji: '🧬', title: 'Peptide Guide', desc: 'Browse 10 of the most popular peptides with honest breakdowns and real studies.' },
            { to: '/quiz', emoji: '🎯', title: 'Find Your Match', desc: 'Answer 4 questions and discover which peptides align with your health goals.' },
            { to: '/research', emoji: '📄', title: 'The Research', desc: 'Real studies from real medical journals, summarized in plain English.' },
            { to: '/fda', emoji: '✅', title: 'FDA Status', desc: 'Which peptides are approved, which aren\'t, and what that actually means for you.' },
            { to: '/quiz', emoji: '💊', title: 'Get Started', desc: 'Ready to explore? Connect with a licensed peptide therapy provider.' },
          ].map((card, i) => (
            <Link key={i} to={card.to} className="card" style={{ padding: 24, textDecoration: 'none', display: 'block' }}>
              <span style={{ fontSize: 28, display: 'block', marginBottom: 12 }}>{card.emoji}</span>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 650, color: 'var(--text)', marginBottom: 8 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.6, margin: 0, fontWeight: 350 }}>
                {card.desc}
              </p>
            </Link>
          ))}
        </div>

        <CTABanner />
      </section>
    </>
  );
}
