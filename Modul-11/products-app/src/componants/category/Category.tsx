import { useContext } from "react";
import { productsContext } from "../../context/productsContext";
import { useParams } from "react-router-dom";
import displayProducts from "../products/displayProducts";
import { Typography } from "@mui/material";
function Category() {
  const { categoryName } = useParams();
  const context = useContext(productsContext);

  if (!context) return null;

  const { products } = context;

  const filteredProduct = products.filter((product) => product.category === categoryName);
  console.log(products);

  return (
    <div>
      <Typography sx={{ textAlign: "center", textTransform: "capitalize", fontWeight: 500 }} variant="h2" gutterBottom>
        {categoryName}
      </Typography>

      {displayProducts(filteredProduct)}
    </div>
  );
}

export default Category;
