import "./App.css";
import { useState } from "react";

function useFormInput() {
  const [value, setValue] = useState<number>(0);

  function handleInputChangeEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number(event.target.value));
  }

  return {
    value,
    handleInputChangeEvent,
  };
}

function App() {
  const { value, handleInputChangeEvent } = useFormInput();
  return (
    <div className="body">
      <div className="app">
        <span className="t-4">Zeit festlegen</span>
        <br />
        <input className="input" type="number" value={value} onChange={handleInputChangeEvent} />
        <br />
        <span className="t-1 bold">Time left: </span>
        <br />
        <span className="t-1 bold">{value.toFixed(3)}s</span>
        <div className="button-row">
          <button>Start</button>
          <button>Pause</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
