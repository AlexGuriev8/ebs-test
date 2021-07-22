import React from "react";
import { CartItemType, Product } from "../utils";


interface ContextState {
  cartItems: CartItemType[];
  products: Product[],
  handleAddToCart: (product: Product | CartItemType ) => void,
  handleRemoveFromCart: (name:string) => void,
  totalItems:  number,
  sort: (key: string, sortType: string) => void
}
const ProductsContext = React.createContext({} as ContextState);

export default ProductsContext;
