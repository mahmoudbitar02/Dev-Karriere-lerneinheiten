import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OverView from "./routes/overview/OverView";
import CreateView from "./routes/create/CreateView";
import EditView from "./routes/edit/EditView";
import Root from "./routes/Root";
import { useReducer } from "react";
import userManagementReducer from "./hooks/userManagementReducer";
import { UserContext } from "./context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/overview", element: <OverView /> },
      { path: "/create", element: <CreateView /> },
      { path: "/edit/:id", element: <EditView /> },
    ],
  },
]);

function App() {
  const [users, usersDispatch] = useReducer(userManagementReducer, [], fetchInitUserData);

  function fetchInitUserData() {
    const stringUsers = localStorage.getItem("users");
    if (stringUsers) {
      return JSON.parse(stringUsers);
    }
    return [];
  }
  return (
    <UserContext.Provider value={{ users, usersDispatch }}>
      <RouterProvider router={router} />{" "}
    </UserContext.Provider>
  );
}

export default App;
