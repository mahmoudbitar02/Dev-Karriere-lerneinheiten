import { createContext } from "react";

export type ProductsContext = {
  products: string;
  productsDispatch: () => {};
};

export const productsContext = createContext<ProductsContext | undefined>(undefined);
