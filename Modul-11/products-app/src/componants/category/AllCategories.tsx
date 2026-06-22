import { useContext } from "react";
import { productsContext } from "../../context/productsContext";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./AllCategories.css";

function AllCategories() {
  const context = useContext(productsContext);

  if (!context) return null;

  const { products } = context;
  const categories = [...new Set(products.map((prod) => prod.category))];
  console.log(categories);

  return (
    <Box className="box-container" sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Categories
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {categories.map((cat) => (
          <Link key={cat} to={`/category/${cat}`} style={{ textDecoration: "none" }}>
            <Button variant="outlined" size="small">
              {cat}
            </Button>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default AllCategories;
