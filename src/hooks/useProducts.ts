import { computerProducts, homeProducts } from "../mock/products";

import { useEffect, useState } from "react";
import {
  productsCollection,
  query,
  where,
  getDocs,
} from "../includes/firebase";
import IProductDB from "../interfaces/IProductDB";

function useProducts() {
  // todo implement logic for loading data from BE
  const [products, setProducts] = useState(Array<IProductDB>());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    console.log("ProductsList... useEffect()");
    const initialize = async () => {
      console.log("initialize()");
      // if (!isInitialized) {
      if (isInitialized) {
        // TODO - change when finished with testing UI, no need to query backend for now..
        console.log("...quering..");
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

  return { computerProducts, homeProducts, products };
}

export default useProducts;
