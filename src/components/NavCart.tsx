import cartIcon from "../assets/icons/cart.png";

import styles from "./NavCart.module.css";

function NavCart() {
  return (
    <div className={styles.container}>
      <img src={cartIcon} height={34} alt="Amazon cart icon" />
      <span className={styles.amount}>0</span>
      <span className={styles.text}>Cart</span>
    </div>
  );
}

export default NavCart;
