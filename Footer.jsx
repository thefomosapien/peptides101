import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.disclaimer}>
        <div className={styles.disclaimerLabel}>⚕️ Medical Disclaimer</div>
        <p className={styles.disclaimerText}>
          The information on this website is for educational purposes only and is not intended as
          medical advice. Peptides101.info does not diagnose, treat, cure, or prevent any disease.
          Peptide therapy should only be pursued under the guidance of a licensed healthcare
          professional. Always consult with a qualified physician before starting any new supplement,
          medication, or health protocol. Individual results may vary. This site may contain affiliate
          links — we earn a small commission when you purchase through our partners, at no additional
          cost to you.
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>P</div>
          <span className={styles.copyright}>
            © 2026 Peptides101.info · Educational resource · Not medical advice
          </span>
        </div>
        <div className={styles.links}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
