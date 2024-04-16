import IProductDB from "../../interfaces/IProductDB";
import styles from "./ProductTiel.module.css";

function ProductTiel({ title, img, price }: IProductDB) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>${price.toFixed(2)}</div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={img} alt="Product image" />
      </div>
      <button className={styles.addToCartBtn}>Add to Cart</button>
    </div>
  );
}

export default ProductTiel;
