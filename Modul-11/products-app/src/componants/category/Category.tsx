import { useContext } from "react";
import { productsContext } from "../../context/productsContext";
import { useParams } from "react-router-dom";
import displayProducts from "../products/displayProducts";
function Category() {
  const { categoryName } = useParams();
  const context = useContext(productsContext);

  if (!context) return null;

  const { products } = context;

  const filteredProduct = products.filter((product) => product.category === categoryName);
  console.log(products);

  return <div>{displayProducts(filteredProduct)}</div>;
}

export default Category;
