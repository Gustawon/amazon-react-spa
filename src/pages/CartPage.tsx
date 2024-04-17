import CheckoutBox from "../components/cart/CheckoutBox";
import ShoppingCart from "../components/cart/ShoppingCart";
import styles from "./CartPage.module.css";

function CartPage() {
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        <ShoppingCart />
        <CheckoutBox />
      </div>
    </div>
  );
}

export default CartPage;
