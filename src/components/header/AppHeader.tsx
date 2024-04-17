import "./AppHeader.module.css";
import styles from "./AppHeader.module.css";

import amzLogo from "../../assets/logos/logo-white.svg";
import DeliverTo from "../header/DeliverTo";
import SearchBar from "../header/SearchBar";
import LanguagePicker from "../header/LanguagePicker";
import NavItem from "../header/NavItem";
import NavCart from "../header/NavCart";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <header>
      <div id={styles.navbar} role="navigation" aria-label="navigation">
        <div id={styles["nav-belt"]}>
          <div className={styles.navLeft}>
            <Link to="/">
              <img src={amzLogo} className={styles.logo} alt="Amazon logo" />
            </Link>
            <Link to="/address">
              <DeliverTo />
            </Link>
          </div>
          <div className={styles.navFill}>
            <SearchBar />
          </div>
          <div className={styles.navRight}>
            <Link to="/language">
              <LanguagePicker />
            </Link>
            <Link to="/login">
              <NavItem
                topLine="Hello, sign in"
                bottomLine="Account & Lists"
                showArrow
              />
            </Link>
            <Link to="/orders">
              <NavItem
                topLine="Returns"
                bottomLine="& Orders"
                showArrow={false}
              />
            </Link>
            <Link to="/cart">
              <NavCart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
