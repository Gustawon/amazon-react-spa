import {
  computerProducts,
  homeProducts,
  booksProducts,
  toysProducts,
  decorProducts,
  laptopsProducts,
  gamingProducts,
  smartwatchesProducts,
  beautyProducts,
  kitchenProducts,
} from "../mock/products";

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
      case Categories.BOOKS:
        return booksProducts;
      case Categories.TOYS:
        return toysProducts;
      case Categories.DECOR:
        return decorProducts;
      case Categories.LAPTOPS:
        return laptopsProducts;
      case Categories.GAMING:
        return gamingProducts;
      case Categories.SMARTWATCHES:
        return smartwatchesProducts;
      case Categories.BEAUTY:
        return beautyProducts;
      case Categories.KITCHEN:
        return kitchenProducts;
      default:
        return [];
    }
  }

  return { products, getProductsByCategoryID };
}

export default useProducts;
