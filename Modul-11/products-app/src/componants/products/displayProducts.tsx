import { Link } from "react-router-dom";
import type { Products } from "../../hooks/products";
function displayProducts(products: Products[]) {
  return (
    <>
      {products.map((item, index) => (
        <div key={index}>
          <p>ID: {item.id}</p>
          <p>Title:{item.title}</p>
          <p>Description: {item.description}</p>
          <p>
            Category:{" "}
            <Link to={`/category/${item.category}`}>
              <button>{item.category}</button>{" "}
            </Link>
          </p>
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
export default displayProducts;
