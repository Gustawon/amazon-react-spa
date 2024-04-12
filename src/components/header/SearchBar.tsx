import "./SearchBar.module.css";
import styles from "./SearchBar.module.css";

import searchIcon from "../../assets/icons/search.svg";
import arrowDropDown from "../../assets/icons/arrow_drop_down.svg";

function SearchBar() {
  return (
    <div className={styles.container}>
      <label htmlFor="search">Search Amazon React SPA</label>
      <button className={styles.categoryBtn}>
        <span>All</span>
        <img src={arrowDropDown} alt="Arrow drop down icon" />
      </button>
      <input type="text" name="search" placeholder="Search Amazon React SPA" />
      <button className={styles.searchBtn}>
        <img src={searchIcon} alt="Search icon" />
      </button>
    </div>
  );
}

export default SearchBar;
