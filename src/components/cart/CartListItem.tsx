import { IProductInCart } from "../../interfaces/IProductInCart";
import styles from "./CartListItem.module.css";

function CartListItem({ item }: { item: IProductInCart }) {
  return (
    <li key={item.product.asin} className={styles.listItem}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={item.product.img}
          alt="Product image"
        />
      </div>
      <div className={styles.centerContainer}>
        <div className={styles.title}>{item.product.title}</div>

        <div className={styles.bottomRow}>
          <div>Quantity: {item.quantity}</div>
          <div>Add +</div>
          <div>Remove -</div>
          <div>Delete</div>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <div>${item.product.price}</div>
      </div>
    </li>
  );
}

export default CartListItem;
