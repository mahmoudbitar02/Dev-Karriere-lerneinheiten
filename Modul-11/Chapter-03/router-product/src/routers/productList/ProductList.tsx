import { Link, Outlet } from "react-router-dom";
type Products = {
  name: string;
  price: number;
  id: number;
};

export const products: Products[] = [
  { id: 1, name: "Produkt A", price: 29.99 },
  { id: 2, name: "Produkt B", price: 49.99 },
  { id: 3, name: "Produkt C", price: 19.99 },
];

function ProductList() {
  return (
    <>
      <h1>Product</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`products/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
      {/* <Outlet /> */}
    </>
  );
}

export default ProductList;
