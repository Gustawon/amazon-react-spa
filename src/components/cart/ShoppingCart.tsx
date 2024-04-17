import styles from "./ShoppingCart.module.css";

import {
  computerProducts,
  laptopsProducts,
  gamingProducts,
  homeProducts,
} from "../../mock/products";
import { useEffect, useState } from "react";
import { IProductInCart } from "../../interfaces/IProductInCart";
import CartListItem from "./CartListItem";

const productsInCart: IProductInCart[] = [
  {
    product: computerProducts[8],
    quantity: 1,
  },
  {
    product: computerProducts[9],
    quantity: 1,
  },
  {
    product: laptopsProducts[1],
    quantity: 1,
  },
  {
    product: gamingProducts[0],
    quantity: 1,
  },
  {
    product: gamingProducts[2],
    quantity: 1,
  },
  {
    product: gamingProducts[3],
    quantity: 1,
  },
  {
    product: homeProducts[10],
    quantity: 2,
  },
];

function ShoppingCart() {
  const [cart, setCart] = useState([] as IProductInCart[]);

  useEffect(() => {
    setCart(productsInCart);
  }, []);

  return (
    <div className={styles.shoppingCart}>
      <div className={styles.title}>Shopping Cart</div>
      <div className={styles.price}>Price</div>

      <ul className={styles.list}>
        {cart.map((item) => {
          return <CartListItem key={item.product.asin} item={item} />;
        })}
      </ul>

      <div className={styles.subtotal}>Subtotal (X items): $ 000.00</div>
    </div>
  );
}

export default ShoppingCart;
