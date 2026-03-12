import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <div className={styles.banner}>
      <h3 className={styles.heading}>Ready to explore peptide therapy?</h3>
      <p className={styles.text}>
        Connect with a licensed physician who specializes in peptide therapy. Get
        personalized guidance, lab work, and pharmaceutical-grade products.
      </p>
      <button className={styles.button}>Find a Peptide Provider →</button>
      <div className={styles.disclosure}>
        Affiliate Partner — we may earn a commission at no extra cost to you.
      </div>
    </div>
  );
}
