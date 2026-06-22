import { Link } from "react-router-dom";
import type { Products } from "../../hooks/products";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";
import "./displayProducts.css";
import { useState } from "react";

function displayProducts(products: Products[]) {
  const [wishlist, setWishlist] = useState<Products[]>(() => {
    const sorted = localStorage.getItem("wishlist");
    return sorted ? JSON.parse(sorted) : [];
  });

  function toggleWishlist(item: Products) {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === item.id);
      const updated = exists ? prev.filter((p) => p.id !== item.id) : [...prev, item];
      localStorage.setItem("wishlist", JSON.stringify(updated));

      return updated;
    });
  }

  function isInWishlist(item: Products) {
    return wishlist.some((p) => p.id === item.id);
  }

  return (
    <>
      <Box
        className="products-box"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "stretch",
        }}
      >
        {products.map((item, index) => (
          <Card key={index} sx={{ width: 345, height: "500", display: "flex", flexDirection: "column" }}>
            <CardActionArea component={Link} to={`/products/${item.id}`} sx={{ flexFlow: 1, display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                image={item.thumbnail}
                alt={item.title}
              />
              <CardContent sx={{ flexGrow: 1, overflow: "hidden" }}>
                <Typography gutterBottom variant="h6">
                  {item.title}
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>

                <Typography sx={{ mt: 1, fontWeight: "bold" }}>💰 {item.price} €</Typography>

                <Typography variant="body2">🏷️ Brand: {item.brand}</Typography>

                <Typography variant="body2">📦 Stock: {item.stock}</Typography>

                <Typography variant="body2">
                  {item.availabilityStatus === "In Stock" ? "🟢" : item.availabilityStatus === "Low Stock" ? "🟡" : "🔴"} Availability:{" "}
                  {item.availabilityStatus}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions sx={{ display: "flex", justifyContent: "space-between", mt: "auto" }}>
              <Link to={`/category/${item.category}`}>
                <Button size="small" variant="outlined">
                  {item.category}
                </Button>
              </Link>

              <Button onClick={() => toggleWishlist(item)} size="small" variant="contained">
                {isInWishlist(item) ? "💔 Remove" : "❤️ Favorite"}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}
export default displayProducts;
