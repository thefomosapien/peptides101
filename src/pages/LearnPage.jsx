import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { learnTopics } from '../data/learnTopics';
import InfographicPlaceholder from '../components/InfographicPlaceholder';
import CTABanner from '../components/CTABanner';

function LearnCard({ topic, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`card ${open ? 'card--active' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: 16,
          padding: '18px 22px', background: 'transparent', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          fontSize: 24, width: 44, height: 44, borderRadius: 12,
          background: 'var(--bg-card-alt)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>
          {topic.emoji}
        </span>
        <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--text)', flex: 1 }}>
          {topic.title}
        </span>
        <span style={{
          color: 'var(--accent)', fontSize: 18, transition: 'transform 0.3s',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>
          ▾
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 22px 24px', paddingLeft: 82 }}>
          {topic.paragraphs.map((p, i) => (
            <p key={i} className="body-text" style={{ margin: i === 0 ? '0 0 12px' : '12px 0' }}>
              {p}
            </p>
          ))}
          {topic.infographic && (
            <InfographicPlaceholder
              id={topic.infographic.id}
              title={topic.infographic.title}
              description={topic.infographic.description}
              aspectRatio="16/8"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default function LearnPage() {
  return (
    <section className="section page-enter">
      <Helmet>
        <title>Peptides 101 — What Are Peptides & How Do They Work?</title>
        <meta name="description" content="Learn the basics of peptide therapy — what peptides are, how they work in your body, their safety profile, and why they're one of the most talked-about breakthroughs in modern health." />
        <meta property="og:title" content="Peptides 101 — What Are Peptides & How Do They Work?" />
        <meta property="og:description" content="Learn the basics of peptide therapy — what peptides are, how they work in your body, their safety profile, and why they're one of the most talked-about breakthroughs in modern health." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://peptides101.info/learn" />
      </Helmet>

      <div className="text-center" style={{ marginBottom: 48 }}>
        <h1 className="heading-2">Peptides 101</h1>
        <p className="subtitle" style={{ maxWidth: 460, margin: '0 auto' }}>
          Everything you need to know, explained like you're talking to a friend.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {learnTopics.map((t, i) => (
          <LearnCard key={i} topic={t} defaultOpen={i === 0} />
        ))}
      </div>

      <CTABanner />
    </section>
  );
}
