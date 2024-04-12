import arrowDropDown from "../assets/icons/triangle-bottom-icon.svg";

import styles from "./NavItem.module.css";

function NavItem({
  topLine,
  bottomLine,
  showArrow,
}: {
  topLine: string;
  bottomLine: string;
  showArrow: boolean;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>{topLine}</div>
      <div className={styles.bottom}>
        <span>{bottomLine}</span>
        {showArrow && <img className={styles.arrow} src={arrowDropDown} />}
      </div>
    </div>
  );
}

export default NavItem;
