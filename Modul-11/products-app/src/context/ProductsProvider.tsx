import { useEffect, useReducer } from "react";
import { products as productsReducer, type Products } from "../hooks/products";
import axios from "axios";
import { productsContext } from "./productsContext";

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [products, productsDispatch] = useReducer(productsReducer, []);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      if (response.status === 200) {
        productsDispatch({ type: "SET_PRODUCTS", payload: response.data.products });
      }
    } catch (error) {}
  }

  return <productsContext.Provider value={{ products, productsDispatch }}>{children}</productsContext.Provider>;
}
