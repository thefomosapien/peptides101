import { useState } from 'react';
import { quizQuestions } from '../data/quizQuestions';
import { peptides } from '../data/peptides';
import FDABadge from '../components/FDABadge';
import CTABanner from '../components/CTABanner';

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState(null);

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate results
      const allTags = newAnswers.flatMap((a) => a.tags);
      const fdaOnly = allTags.includes('fda-only');
      const isBeginner = allTags.includes('beginner');

      const scored = peptides
        .map((p) => {
          let score = 0;
          allTags.forEach((tag) => {
            if (p.goals.includes(tag)) score += 2;
          });
          if (fdaOnly && !p.fdaApproved) score = -100;
          if (isBeginner && p.name === 'Collagen Peptides') score += 5;
          score += p.popularity / 50;
          return { ...p, score };
        })
        .filter((p) => p.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      setResults(scored);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResults(null);
  };

  // ─── Results view ───
  if (results) {
    return (
      <section className="section" style={{ maxWidth: 760 }}>
        <div className="text-center" style={{ marginBottom: 40 }}>
          <h2 className="heading-2">Your Personalized Results</h2>
          <p className="subtitle">
            Based on your answers, here are the peptides that align with your goals.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {results.map((p, i) => (
            <div
              key={p.id}
              className={`card ${i === 0 ? 'card--active' : ''}`}
              style={{ padding: 26, position: 'relative' }}
            >
              {i === 0 && (
                <div style={{
                  position: 'absolute', top: -11, left: 22,
                  background: 'var(--accent)', color: 'white',
                  fontSize: 11, fontWeight: 700, padding: '4px 14px',
                  borderRadius: 8,
                }}>
                  Best Match
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
                <span style={{
                  fontSize: 32, width: 52, height: 52, borderRadius: 14,
                  background: 'var(--bg-card-alt)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  {p.icon}
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 650, color: 'var(--text)', margin: 0 }}>
                    {p.name}
                  </h3>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 350 }}>
                    {p.category}
                  </span>
                </div>
                <FDABadge approved={p.fdaApproved} />
              </div>

              <p className="body-text" style={{ marginBottom: 14 }}>{p.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.benefits.map((b, j) => (
                  <span key={j} className="tag tag--accent">{b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 32 }}>
          <button className="btn btn--secondary" onClick={reset}>Retake Quiz</button>
        </div>

        <CTABanner />
      </section>
    );
  }

  // ─── Quiz view ───
  const q = quizQuestions[step];

  return (
    <section className="section" style={{ maxWidth: 620 }}>
      <div className="text-center" style={{ marginBottom: 40 }}>
        <h2 className="heading-2">Find Your Peptide Match</h2>
        <p className="subtitle">
          Answer {quizQuestions.length} quick questions and we'll suggest which peptides
          align with your goals.
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 28, justifyContent: 'center' }}>
        {quizQuestions.map((_, i) => (
          <div
            key={i}
            style={{
              width: 56, height: 5, borderRadius: 3,
              background: i <= step ? 'var(--accent)' : 'var(--border-light)',
              transition: 'background 0.3s',
            }}
          />
        ))}
      </div>

      {/* Question card */}
      <div className="card" style={{ padding: 36 }}>
        <div style={{
          fontSize: 12, color: 'var(--text-muted)', marginBottom: 10,
          textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 500,
        }}>
          Question {step + 1} of {quizQuestions.length}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500,
          color: 'var(--text)', marginBottom: 24, lineHeight: 1.35,
        }}>
          {q.question}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              style={{
                background: 'var(--bg-card-alt)',
                border: '1.5px solid var(--border-light)',
                borderRadius: 12, padding: '15px 20px',
                cursor: 'pointer', textAlign: 'left',
                fontSize: 15, color: 'var(--text)', fontWeight: 400,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.background = 'var(--accent-light)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border-light)';
                e.target.style.background = 'var(--bg-card-alt)';
              }}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
