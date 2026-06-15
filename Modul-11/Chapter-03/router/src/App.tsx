import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstRoute from "./routes/firstrout/FirstRoute";
import SecondRoute from "./routes/secoundroute/SecondRoute";
import Root from "./routes/Root";
import ErrorPage from "./routes/error/ErrorPage";
import Index from "./routes/Index";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,

      children: [
        { index: true, element: <Index /> },
        { path: "/first", element: <FirstRoute /> },
        { path: "/second", element: <SecondRoute /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
