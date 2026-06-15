import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstRoute from "./routes/firstrout/FirstRoute";
import SecondRoute from "./routes/secoundroute/SecondRoute";
import Root from "./routes/Root";
import ErrorPage from "./routes/error/ErrorPage";
import Index from "./routes/Index";
import Edit from "./routes/edit/Edit";
import FirstRouteDetail from "./routes/detail/FirstRouteDetail";

const testPath = "first";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,

      children: [
        { index: true, element: <Index /> },
        {
          path: testPath,
          element: <FirstRoute />,
        },
        {
          path: "first/:itemId",
          element: <FirstRouteDetail />,
          children: [{ path: "edit", element: <Edit /> }],
        },
        { path: "second", element: <SecondRoute /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
