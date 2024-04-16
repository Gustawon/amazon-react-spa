import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import IProductDB from "../../interfaces/IProductDB";
import ProductTiel from "./ProductTiel";

import styles from "./ProductsList.module.css";
import useProducts from "../../hooks/useProducts";

function ProductsList() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState(Array<IProductDB>());

  const { getProductsByCategoryID } = useProducts();

  useEffect(() => {
    const productsDB = getProductsByCategoryID(categoryId ? categoryId : "");
    setProducts(productsDB);
  }, [categoryId, getProductsByCategoryID]);

  return (
    <div className={styles.container}>
      <h2>Available products in category: {categoryId}</h2>
      <div className={styles.tielsContainer}>
        {products.map((product) => {
          return <ProductTiel key={product.asin} {...product} />;
        })}
      </div>
    </div>
  );
}

export default ProductsList;
