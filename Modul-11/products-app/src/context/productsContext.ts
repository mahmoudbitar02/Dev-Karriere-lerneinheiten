import { createContext, type Dispatch } from "react";
import type { Products, ProductsAction } from "../hooks/products";

export type ProductsContext = {
  products: Products[];
  productsDispatch: Dispatch<ProductsAction>;
};

export const productsContext = createContext<ProductsContext | undefined>(undefined);
