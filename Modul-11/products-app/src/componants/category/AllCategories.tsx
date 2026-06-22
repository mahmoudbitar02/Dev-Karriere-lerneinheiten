import { useContext } from "react";
import { productsContext } from "../../context/productsContext";
import { Link } from "react-router-dom";

function AllCategories() {
  const context = useContext(productsContext);

  if (!context) return null;

  const { products } = context;
  const categories = [...new Set(products.map((prod) => prod.category))];
  console.log(categories);

  return (
    <div>
      {categories.map((cat, index) => (
        <div key={index}>
          <Link to={`/category/${cat}`}>
            <button>Category: {cat}</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllCategories;
