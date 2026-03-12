import styles from './PeptideCard.module.css';
import FDABadge from './FDABadge';

export default function PeptideCard({ peptide: p, isExpanded, onToggle }) {
  return (
    <div
      className={`${styles.card} ${isExpanded ? styles.cardActive : ""}`}
      onClick={onToggle}
    >
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.icon}>{p.icon}</span>
          <div>
            <h3 className={styles.name}>{p.name}</h3>
            <div className={styles.aka}>{p.aka}</div>
          </div>
        </div>
        <FDABadge approved={p.fdaApproved} />
      </div>

      <div className={styles.category}>{p.category}</div>

      <p className={styles.description}>{p.description}</p>

      <div className={styles.tags}>
        {p.benefits.map((b, i) => (
          <span key={i} className={styles.tag}>{b}</span>
        ))}
      </div>

      {isExpanded && (
        <div className={styles.expanded}>
          <div className={styles.sectionLabel} style={{ color: "var(--orange)" }}>
            ⚠️ Important Considerations
          </div>
          <p className={styles.considerations}>{p.considerations}</p>

          <div className={styles.sectionLabel} style={{ color: "var(--accent)" }}>
            📄 Referenced Studies
          </div>
          {p.studies.map((s, i) => (
            <div key={i} className={styles.study}>
              <div className={styles.studyTitle}>{s.title}</div>
              <div className={styles.studyJournal}>
                {s.journal} · {s.year}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
