import "./App.css";

// const [count, setCount] = useState(0);

// const [countObject, setCountObject] = useState({ count: 0, test: 2 });

// useEffect(() => {
//   console.log(countObject, count);
// }, [count, countObject]);

// function handleButtonClick() {
//   console.log("Clicking", count);
//   setCount(count + 1);

//   setCountObject({ ...countObject, ...{ count: count + 1, test: count + 9, hallo: count * 2 } });
// }
// return (
//   <>
//     <button onClick={handleButtonClick}>click {count}</button>
//   </>
// );

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstRoute from "./routes/firstrout/FirstRoute";
import SecondRoute from "./routes/secoundroute/SecondRoute";
import Root from "./routes/Root";
import ErrorPage from "./routes/error/ErrorPage";
import Index from "./routes/Index";
import Edit from "./routes/edit/Edit";
import FirstRouteDetail from "./routes/detail/FirstRouteDetail";
import { ClickerContext, ClickerContext2 } from "./context/ClickerContext";
import { useReducer } from "react";
// import { clickerReducer } from "./hook/ClickerReducer";
import ClickerReducer from "./hook/ClickerReducer2";
import User from "./routes/user/User";
import Posts from "./routes/posts/Posts";

const testPath = "first";
function App() {
  // const [count, setCount] = useReducer(clickerReducer, 0);

  const [count2, setCount2] = useReducer(ClickerReducer, 0);
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
        { path: "user", element: <User /> },
        { path: "posts", element: <Posts /> },
      ],
    },
  ]);

  return (
    <ClickerContext2.Provider value={{ count2, setCount2 }}>
      <RouterProvider router={router} />
    </ClickerContext2.Provider>
  );
}

export default App;
