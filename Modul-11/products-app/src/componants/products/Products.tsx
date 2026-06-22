import displayProducts from "./displayProducts";
import { productsContext } from "../../context/productsContext";
import { useContext } from "react";

function Products() {
  const context = useContext(productsContext);
  if (!context) return;
  const { products } = context;
  return <div>{displayProducts(products)}</div>;
}

export default Products;
