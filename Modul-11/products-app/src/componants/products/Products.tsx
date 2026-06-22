import displayProducts from "./displayProducts";
import { productsContext } from "../../context/productsContext";
import { useContext } from "react";
import Typography from "@mui/material/Typography";

function Products() {
  const context = useContext(productsContext);
  if (!context) return;
  const { products } = context;
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <Typography sx={{ textAlign: "center", fontWeight: 500 }} variant="h1" gutterBottom>
        Products
      </Typography>
      {displayProducts(products)}
    </div>
  );
}

export default Products;
