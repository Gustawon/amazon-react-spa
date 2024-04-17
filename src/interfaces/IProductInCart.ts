import IProductDB from "./IProductDB";

export interface IProductInCart {
  product: IProductDB;
  quantity: number;
}
