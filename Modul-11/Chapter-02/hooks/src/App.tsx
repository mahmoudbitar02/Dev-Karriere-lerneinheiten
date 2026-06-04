import { useState, useEffect, useRef } from "react";
import { useInfo, useAlter } from "./hooks/UseInfo";

import "./App.css";

function App() {
  const vorname = useInfo("");
  const nachname = useInfo("");
  const alter = useAlter();
  const [count, setCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("Component mounted");
    inputRef.current?.focus();
    // return () => {
    //   console.log("Component unmounted");
    // };
  }, [count]);

  function handleButtonClick(operation: string) {
    if (operation === "+") {
      setCount(count + 1);
    } else if (operation === "-") {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => handleButtonClick("+")}>Increment</button>
      <button onClick={() => handleButtonClick("-")}>Decrement</button>

      <div>
        Vorname:
        <input type="text" value={vorname.name} onChange={vorname.handleVornameChange} placeholder="Vorname eingeben" />
        Nachname:
        <input type="text" value={nachname.name} onChange={nachname.handleVornameChange} placeholder="Nachname eingeben" />
        Alter:
        <input type="number" value={alter.alter} onChange={alter.handleAlterChange} placeholder="Alter eingeben" />
      </div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
    </>
  );
}

export default App;
