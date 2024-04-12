import "./AppHeader.module.css";
import styles from "./AppHeader.module.css";

import amzLogo from "../../assets/logos/logo-white.svg";
import DeliverTo from "../header/DeliverTo";
import SearchBar from "../header/SearchBar";
import LanguagePicker from "../header/LanguagePicker";
import NavItem from "../header/NavItem";
import NavCart from "../header/NavCart";

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
          <div className={styles.navRight}>
            <LanguagePicker />
            <NavItem
              topLine="Hello, sign in"
              bottomLine="Account & Lists"
              showArrow
            />
            <NavItem
              topLine="Returns"
              bottomLine="& Orders"
              showArrow={false}
            />
            <NavCart />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
