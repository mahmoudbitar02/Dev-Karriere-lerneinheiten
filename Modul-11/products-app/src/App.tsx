import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./roots/Roots";
import "./App.css";
import Products from "./componants/products/Products";
import Category from "./componants/category/Category";
import Index from "./componants/index/Index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots />,
      children: [
        { index: true, element: <Index /> },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "category",
          element: <Category />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
