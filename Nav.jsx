import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const tabs = [
  { to: "/", label: "Home" },
  { to: "/learn", label: "Peptides 101" },
  { to: "/guide", label: "Peptide Guide" },
  { to: "/quiz", label: "Find Yours" },
  { to: "/research", label: "Research" },
  { to: "/fda", label: "FDA Status" },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          <div className={styles.logoIcon}>P</div>
          <span className={styles.logoText}>
            Peptides<span className={styles.logoAccent}>101</span>
            <span className={styles.logoDomain}>.info</span>
          </span>
        </NavLink>
        <div className={styles.tabs}>
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.to === "/"}
              className={({ isActive }) =>
                `${styles.tab} ${isActive ? styles.tabActive : ""}`
              }
            >
              {t.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
