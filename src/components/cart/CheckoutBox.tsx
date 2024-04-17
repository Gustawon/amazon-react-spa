import Button from "../ui/Button";

import styles from "./CheckoutBox.module.css";

function CheckoutBox() {
  return (
    <div className={styles.checkoutBox}>
      <div className={styles.subtotal}>Subtotal (3 items): $858.00</div>
      <div className={styles.buttonContainer}>
        <Button>Proceed to checkout</Button>
      </div>
    </div>
  );
}

export default CheckoutBox;
