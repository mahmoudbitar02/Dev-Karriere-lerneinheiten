import { useState, useMemo, useRef, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const expensiveCalculation = (num: number) => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      // Simuliert eine aufwendige Berechnung
      result += num * 6;
    }
    return result;
  };

  useEffect(() => {
    inputRef.current?.focus();
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  const test = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  const handleCountClick = (action: string) => {
    action === "increment" ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => handleCountClick("increment")}>Increment</button>
      <button onClick={() => handleCountClick("decrement")}>Decrement</button>
      <h1>Name: {name}</h1>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Name eingeben" />

      <h2>Expensive Calculation Result: {test}</h2>
      <input ref={inputRef} type="text" placeholder="Click me!" />
    </>
  );
}

export default App;
