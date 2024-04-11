import enFlag from "../assets/flags/us.svg";
import arrowDropDown from "../assets/triangle-bottom-icon.svg";

import styles from "./LanguagePicker.module.css";

function LanguagePicker() {
  return (
    <div id={styles["picker-container"]}>
      <img id={styles.flag} src={enFlag} alt="Flag icon" />
      <div id={styles.language}>EN</div>
      <img id={styles.arrow} src={arrowDropDown} alt="Arrow drop down icon" />
    </div>
  );
}

export default LanguagePicker;
