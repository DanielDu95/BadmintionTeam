import styles from "./Header.module.css";

function Header() {
  return (
    <header>
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
            <a className={styles.navItem} href="#">
              about
            </a>
          </li>
          <li>
            <a className={styles.navItem} href="#">
              honor
            </a>
          </li>
          <li>
            <a className={styles.navItem} href="#">
              tournament
            </a>
          </li>
          <li>
            <a className={styles.navItem} href="#">
              players
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
