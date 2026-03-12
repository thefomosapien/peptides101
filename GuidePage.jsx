import { useState } from 'react';
import { peptides, categories } from '../data/peptides';
import PeptideCard from '../components/PeptideCard';
import InfographicPlaceholder from '../components/InfographicPlaceholder';

export default function GuidePage() {
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState(null);

  const filtered = filter === 'all'
    ? peptides
    : peptides.filter((p) => p.category === filter);

  return (
    <section className="section section--wide">
      <div className="text-center" style={{ marginBottom: 40 }}>
        <h2 className="heading-2">The Peptide Guide</h2>
        <p className="subtitle" style={{ maxWidth: 520, margin: '0 auto' }}>
          An honest breakdown of the most popular peptides — what they do, what the
          research says, and their FDA status.
        </p>
      </div>

      <InfographicPlaceholder
        id="peptide-categories"
        title="Peptide Categories at a Glance"
        description="A visual map of all peptide categories — Recovery, Weight Management, Anti-Aging, Immune Support, Skin — with popular peptides in each."
        aspectRatio="16/6"
      />

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

      {/* Peptide grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 18,
      }}>
        {filtered.map((p) => (
          <PeptideCard
            key={p.id}
            peptide={p}
            isExpanded={expanded === p.id}
            onToggle={() => setExpanded(expanded === p.id ? null : p.id)}
          />
        ))}
      </div>
    </section>
  );
}
