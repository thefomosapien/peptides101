import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { quizQuestions } from '../data/quizQuestions';
import { peptides } from '../data/peptides';
import FDABadge from '../components/FDABadge';
import CTABanner from '../components/CTABanner';

function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem('peptides101_email_captured') === 'true';
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      localStorage.setItem('peptides101_email', email);
      localStorage.setItem('peptides101_email_captured', 'true');
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="card" style={{ padding: 32, textAlign: 'center', marginTop: 32, background: 'var(--accent-light)', border: '1px solid #C0E4D8' }}>
        <div style={{ fontSize: 28, marginBottom: 10 }}>✅</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, color: 'var(--text)', marginBottom: 8 }}>
          You're on the list!
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-mid)', fontWeight: 350 }}>
          We'll send your personalized peptide guide shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: 32, textAlign: 'center', marginTop: 32 }}>
      <div style={{ fontSize: 28, marginBottom: 10 }}>📬</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, color: 'var(--text)', marginBottom: 8 }}>
        Get your complete peptide guide delivered to your inbox
      </h3>
      <p style={{ fontSize: 14, color: 'var(--text-mid)', marginBottom: 20, fontWeight: 350 }}>
        Includes detailed breakdowns, dosing insights, and provider recommendations.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            flex: 1,
            minWidth: 220,
            padding: '12px 16px',
            borderRadius: 10,
            border: '1.5px solid var(--border)',
            fontSize: 15,
            fontFamily: 'var(--font-body)',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; }}
          onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
        />
        <button type="submit" className="btn btn--primary" style={{ padding: '12px 28px' }}>
          Send My Guide
        </button>
      </form>
    </div>
  );
}

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
      <section className="section page-enter" style={{ maxWidth: 760 }}>
        <Helmet>
          <title>Your Quiz Results — Peptides101.info</title>
          <meta name="description" content="Your personalized peptide recommendations based on your health goals and preferences." />
        </Helmet>

        <div className="text-center" style={{ marginBottom: 40 }}>
          <h1 className="heading-2">Your Personalized Results</h1>
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

        <EmailCapture />

        <CTABanner />
      </section>
    );
  }

  // ─── Quiz view ───
  const q = quizQuestions[step];

  return (
    <section className="section page-enter" style={{ maxWidth: 620 }}>
      <Helmet>
        <title>Find Your Peptide Match — Free Interactive Quiz</title>
        <meta name="description" content="Answer a few quick questions and discover which peptides align with your health and wellness goals. Free, personalized peptide recommendations." />
        <meta property="og:title" content="Find Your Peptide Match — Free Interactive Quiz" />
        <meta property="og:description" content="Answer a few quick questions and discover which peptides align with your health and wellness goals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peptides101.info/quiz" />
      </Helmet>

      <div className="text-center" style={{ marginBottom: 40 }}>
        <h1 className="heading-2">Find Your Peptide Match</h1>
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
