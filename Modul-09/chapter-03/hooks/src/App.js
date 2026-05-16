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

function Button2() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)} type="">
        {count}
      </button>
    </>
  );
}

function Input() {
  const [input, setInput] = useState("");
  function handelInputChange(event) {
    setInput(event.target.value);
  }
  return (
    <>
      <input onChange={handelInputChange} type="text" />
      <p>{input}</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Button />
      <Button2 />
      <Input />
    </div>
  );
}

export default App;
