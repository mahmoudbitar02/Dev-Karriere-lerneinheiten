import { useParams } from "react-router-dom";
import { products } from "../productList/ProductList";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams<string>();
  const product = products.find((product) => product.id === parseInt(id || ""));
  if (!product) return <div> Products nicht gefunden</div>;

  return (
    <>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <Link to={"/"}>Züruck</Link>
    </>
  );
}

export default ProductDetail;
