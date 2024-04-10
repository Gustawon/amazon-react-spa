import "./AppHeader.module.css";
import styles from "./AppHeader.module.css";

import amzLogo from "../assets/logo-white.svg";
import DeliverTo from "./DeliverTo";

function AppHeader() {
  return (
    <header>
      <div id={styles.navbar} role="navigation" aria-label="navigation">
        <div id={styles["nav-belt"]}>
          <div className={styles.navLeft}>
            <div>
              <img src={amzLogo} className={styles.logo} alt="Amazon logo" />
            </div>
            <div>
              <DeliverTo />
            </div>
          </div>
          <div className={styles.navFill}>Fill</div>
          <div className={styles.navRight}>Right</div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
