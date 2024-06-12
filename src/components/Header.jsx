import styles from "./Header.module.css";

function Header() {
  return (
    <header id="header">
      <a href="#">
        <img className={styles.badmintonLogo} src="./logos/team-logo.jpg" />
        <img
          className={styles.hospitalLogo}
          src="./logos/tongji-logo.png"
          alt="Tongji hospital logo"
        />
      </a>

      <nav>
        <ul>
          <li>
            <a className={styles.navItem} href="#hero">
              about
            </a>
          </li>
          <li>
            <a className={styles.navItem} href="#honer">
              honor
            </a>
          </li>
          <li>
            <a className={styles.navItem} href="#gallery">
              gallary
            </a>
          </li>
          <li>
            <a className={styles.navItem} href="#players">
              players
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
