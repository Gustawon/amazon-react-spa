import "./AppHeader.module.css";
import styles from "./AppHeader.module.css";

import amzLogo from "../assets/logo-white.svg";
import DeliverTo from "./DeliverTo";
import SearchBar from "./SearchBar";

function AppHeader() {
  return (
    <header>
      <div id={styles.navbar} role="navigation" aria-label="navigation">
        <div id={styles["nav-belt"]}>
          <div className={styles.navLeft}>
            <img src={amzLogo} className={styles.logo} alt="Amazon logo" />
            <DeliverTo />
          </div>
          <div className={styles.navFill}>
            <SearchBar />
          </div>
          <div className={styles.navRight}>Right</div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
