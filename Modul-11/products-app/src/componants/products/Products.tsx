import { useEffect, useReducer } from "react";
import { products } from "../../hooks/products";
import axios from "axios";

function Products() {
  const [product, dispatchProducts] = useReducer(products, []);

  useEffect(() => {
    getProducts();
  }, [product]);

  async function getProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      if (response.status === 200) {
        dispatchProducts({ type: "SET_PRODUCTS", payload: response.data.products });
      }
    } catch (error) {}
  }

  function displayProducts() {
    return (
      <>
        {product.map((item, index) => (
          <div key={index}>
            <p>ID: {item.id}</p>
            <p>Title:{item.title}</p>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
            <p>Stock: {item.stock}</p>
            <p>Brand: {item.brand}</p>
            <br />
            <div>
              <p>____________Review____________</p>
              <br />
              {item.reviews?.map((review, index) => (
                <div key={index}>
                  <p>Rating: {review.rating}</p>
                  <p>Comment: {review.comment}</p>
                  <p>-----------------------------</p>
                </div>
              ))}
            </div>
            <p>
              <img
                src={item.images[0]}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "50px",
                  backgroundColor: "#f2f2f2",
                }}
              />
            </p>
            <p>Availability: {item.availabilityStatus}</p>
            <p>Shipping: {item.shippingInformation}</p>

            <hr />
          </div>
        ))}
      </>
    );
  }
  return <div>{displayProducts()}</div>;
}

export default Products;
