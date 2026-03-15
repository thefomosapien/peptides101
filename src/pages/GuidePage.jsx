import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { peptides, categories } from '../data/peptides';
import PeptideCard from '../components/PeptideCard';
import InfographicPlaceholder from '../components/InfographicPlaceholder';
import { PeptideCategoriesInfographic } from '../components/infographics';
import CTABanner from '../components/CTABanner';

export default function GuidePage() {
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState(null);

  const filtered = filter === 'all'
    ? peptides
    : filter === 'Blends & Stacks'
      ? peptides.filter((p) => p.isBlend)
      : peptides.filter((p) => p.category === filter && !p.isBlend);

  const peptideCount = peptides.filter((p) => !p.isBlend).length;
  const blendCount = peptides.filter((p) => p.isBlend).length;

  return (
    <section className="section section--wide page-enter">
      <Helmet>
        <title>The Peptide Guide — {peptideCount}+ Peptides & {blendCount} Blends Explained</title>
        <meta name="description" content="An honest breakdown of the most popular peptides — what they do, what the research says, their FDA status, benefits, and important considerations." />
        <meta property="og:title" content={`The Peptide Guide — ${peptideCount}+ Peptides Explained`} />
        <meta property="og:description" content="An honest breakdown of the most popular peptides — what they do, what the research says, their FDA status, benefits, and important considerations." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://peptides101.info/guide" />
      </Helmet>

      <div className="text-center" style={{ marginBottom: 40 }}>
        <h1 className="heading-2">The Peptide Guide</h1>
        <p className="subtitle" style={{ maxWidth: 520, margin: '0 auto' }}>
          An honest breakdown of {peptideCount}+ peptides and {blendCount} popular blends — what they do, what the
          research says, and their FDA status.
        </p>
      </div>

      <PeptideCategoriesInfographic />

      {/* Category filters */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            style={{
              background: filter === c ? 'var(--accent-light)' : 'white',
              border: `1px solid ${filter === c ? 'rgba(13,124,102,0.3)' : 'var(--border-light)'}`,
              color: filter === c ? 'var(--accent)' : 'var(--text-dim)',
              padding: '7px 18px', borderRadius: 20, cursor: 'pointer',
              fontSize: 13, fontWeight: filter === c ? 600 : 400,
            }}
          >
            {c === 'all' ? 'All Peptides' : c}
          </button>
        ))}
      </div>

      {/* Blends & Stacks intro */}
      {filter === 'Blends & Stacks' && (
        <div style={{
          textAlign: 'center',
          padding: '20px 28px',
          marginBottom: 28,
          background: 'var(--accent-light)',
          borderRadius: 14,
          maxWidth: 680,
          margin: '0 auto 28px',
          border: '1px solid rgba(13,124,102,0.15)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 20,
            fontWeight: 500,
            color: 'var(--text)',
            marginBottom: 10,
          }}>
            Blends & Stacks
          </h2>
          <p style={{
            fontSize: 14,
            color: 'var(--text-mid)',
            lineHeight: 1.7,
            margin: 0,
            fontWeight: 350,
          }}>
            Peptide blends combine two or more peptides in a single preparation,
            designed to work synergistically. Stacks are named protocols using
            multiple peptides together. These are increasingly popular but also more
            complex — always consult a physician before starting any multi-peptide
            protocol.
          </p>
        </div>
      )}

      {/* Peptide grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 18,
      }}>
        {filtered.map((p, index) => (
          <div key={p.id}>
            <PeptideCard
              peptide={p}
              isExpanded={expanded === p.id}
              onToggle={() => setExpanded(expanded === p.id ? null : p.id)}
            />
            {/* Inline CTA after the 3rd peptide */}
            {index === 2 && filter === 'all' && (
              <div style={{
                textAlign: 'center',
                padding: '14px 20px',
                marginTop: 18,
                background: 'var(--accent-light)',
                borderRadius: 12,
                fontSize: 14,
                color: 'var(--text-mid)',
              }}>
                Interested in trying peptides? <Link to="/providers" style={{ fontWeight: 600, color: 'var(--accent)' }}>Find a licensed provider →</Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <CTABanner />
    </section>
  );
}
