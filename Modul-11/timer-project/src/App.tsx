import "./App.css";
import { useState, useRef, useEffect } from "react";

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
  const [timeStart, setTimeStart] = useState(0);
  const [now, setNow] = useState(0);
  const [isPause, setIsPause] = useState(false);

  const intervalId = useRef(0);

  function interval() {
    intervalId.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  useEffect(() => {
    if ((now - timeStart) / 1000 >= value) {
      clearInterval(intervalId.current);
      setIsPause(false);
      setNow(timeStart + value * 1000);
    }
  }, [timeStart, value, now]);

  function handleStart() {
    clearInterval(intervalId.current);

    if (!isPause) {
      const dateNow = Date.now();
      setTimeStart(dateNow);
      setNow(dateNow);
      interval();
    } else {
      const elipsedTime = now - timeStart;
      console.log();
      const dateNow = Date.now();
      setNow(Date.now);
      setTimeStart(dateNow - elipsedTime);
      setIsPause(false);
      interval();
    }
  }

  const secondsLeft = value - (now - timeStart) / 1000;

  function handlePause() {
    setIsPause(true);
    clearInterval(intervalId.current);
  }

  function handleReset() {
    clearInterval(intervalId.current);
    setIsPause(false);
    setNow(0);
    setTimeStart(0);
  }
  return (
    <div className="body">
      <div className="app">
        <span className="t-4">Zeit festlegen</span>
        <br />
        <input className="input" type="number" value={value} onChange={handleInputChangeEvent} />
        <br />
        <span className="t-1 bold">Time left: </span>
        <br />
        <span className="t-1 bold">{secondsLeft.toFixed(3)}s</span>
        <div className="button-row">
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
