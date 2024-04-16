import { computerProducts, homeProducts } from "../mock/products";

import { useEffect, useState } from "react";
import {
  productsCollection,
  query,
  where,
  getDocs,
} from "../includes/firebase";
import IProductDB from "../interfaces/IProductDB";
import { Categories } from "../enums/Categories";

function useProducts() {
  // TODO refactor logic for loading data from BE
  const [products, setProducts] = useState(Array<IProductDB>());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      // TODO - change when finished with testing UI, no need to query backend for now..
      // if (!isInitialized) {
      if (isInitialized) {
        const q = query(productsCollection, where("category", "==", "pcs"));

        const querySnapshot = await getDocs(q);

        console.log({ querySnapshot });

        const loadedProducts: IProductDB[] = [];
        querySnapshot.forEach((doc) => {
          const product: IProductDB = { ...(doc.data() as IProductDB) };
          loadedProducts.push(product);
        });

        if (loadedProducts.length > 0) {
          setProducts(loadedProducts);
          setIsInitialized(true);
        }
      }
    };
    initialize();
  }, [isInitialized]);

  function getProductsByCategoryID(categoryID: string) {
    switch (categoryID) {
      case Categories.COMPUTERS:
        return computerProducts;
      case Categories.HOME:
        return homeProducts;
      default:
        return [];
    }
  }

  return { products, getProductsByCategoryID };
}

export default useProducts;
