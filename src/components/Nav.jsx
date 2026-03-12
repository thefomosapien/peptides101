import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Nav.module.css';

const tabs = [
  { to: "/", label: "Home" },
  { to: "/learn", label: "Peptides 101" },
  { to: "/guide", label: "Peptide Guide" },
  { to: "/quiz", label: "Find Yours" },
  { to: "/research", label: "Research" },
  { to: "/fda", label: "FDA Status" },
  { to: "/glossary", label: "Glossary" },
  { to: "/providers", label: "Get Started" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen1 : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen2 : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen3 : ''}`} />
        </button>

        <div className={`${styles.tabs} ${menuOpen ? styles.tabsOpen : ''}`}>
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.to === "/"}
              className={({ isActive }) =>
                `${styles.tab} ${isActive ? styles.tabActive : ''} ${t.to === '/providers' ? styles.tabCta : ''}`
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
