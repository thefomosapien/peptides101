import styles from './InfographicPlaceholder.module.css';

export default function InfographicPlaceholder({ id, title, description, aspectRatio = "16/9" }) {
  return (
    <div id={id} className={styles.placeholder} style={{ aspectRatio }}>
      <div className={styles.pattern} />
      <div className={styles.iconWrap}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.label}>INFOGRAPHIC PLACEHOLDER</div>
    </div>
  );
}
