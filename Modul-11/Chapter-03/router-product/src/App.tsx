import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductList from "./routers/productList/ProductList";
import ProductDetail from "./routers/productDetail/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
      // children: [
      //   {
      //     path: "products/:id",
      //     element: <ProductDetail />,
      //   },
      // ],
    },

    {
      path: "products/:id",
      element: <ProductDetail />,
    },
  ]);

  return <RouterProvider router={router} />;

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<ProductList />} />
  //       <Route path="/products" element={<ProductList />} />
  //       <Route path="/products/:id" element={<ProductDetail />} />
  //       <Route path="/products/:id/edit" element={<ProductEdit />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
