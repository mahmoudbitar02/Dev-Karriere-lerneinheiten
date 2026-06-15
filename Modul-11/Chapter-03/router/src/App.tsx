import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstRoute from "./routes/firstrout/FirstRoute";
import SecondRoute from "./routes/secoundroute/SecondRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/first",
      element: <FirstRoute />,
    },
    {
      path: "/second",
      element: <SecondRoute />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
