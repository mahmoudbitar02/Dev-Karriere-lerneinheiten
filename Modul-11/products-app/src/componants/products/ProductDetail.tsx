import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { productsContext } from "../../context/productsContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";

function ProductDetail() {
  const { productsId } = useParams();
  const context = useContext(productsContext);
  if (!context) return null;
  const product = context.products.find((pro) => pro.id === Number(productsId));
  console.log(product?.id);

  return (
    <>
      <Link to="/products">
        <button>Back</button>
      </Link>
      <Box
        className="products-box"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "stretch",
        }}
      >
        <Card sx={{ width: 345, height: "500", display: "flex", flexDirection: "column" }}>
          <CardActionArea sx={{ flexFlow: 1, display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
              sx={{
                objectFit: "cover",
              }}
              image={product?.thumbnail}
              alt={product?.title}
            />
            <CardContent sx={{ flexGrow: 1, overflow: "hidden" }}>
              <Typography gutterBottom variant="h6">
                {product?.title}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product?.description}
              </Typography>

              <Typography sx={{ mt: 1, fontWeight: "bold" }}>💰 {product?.price} €</Typography>

              <Typography variant="body2">🏷️ Brand: {product?.brand}</Typography>

              <Typography variant="body2">📦 Stock: {product?.stock}</Typography>

              <Typography variant="body2">
                {product?.availabilityStatus === "In Stock" ? "🟢" : product?.availabilityStatus === "Low Stock" ? "🟡" : "🔴"} Availability:{" "}
                {product?.availabilityStatus}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions sx={{ display: "flex", justifyContent: "space-between", mt: "auto" }}>
            <Link to={`/category/${product?.category}`}>
              <Button size="small" variant="outlined">
                {product?.category}
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default ProductDetail;
