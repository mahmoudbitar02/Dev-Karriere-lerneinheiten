import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  function onHandelClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={onHandelClick} type="">
        {count}
      </button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;
