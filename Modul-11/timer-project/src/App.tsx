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
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const [isPause, setIsPause] = useState(false);

  const intervalId = useRef(0);

  useEffect(() => {
    if ((now - startTime) / 1000 >= value) {
      clearInterval(intervalId.current);
      setIsPause(false);
      setNow(startTime + value * 1000);
    }
  }, [startTime, value, now]);

  function interval() {
    intervalId.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStart() {
    clearInterval(intervalId.current);
    if (!isPause) {
      const dateNow = Date.now();
      setStartTime(dateNow);
      setNow(dateNow);
      interval();
    } else {
      const elipsedTime = now - startTime;

      const dateNow = Date.now();
      setNow(Date.now());
      setStartTime(dateNow - elipsedTime);
      setIsPause(false);
      interval();
    }
  }

  const secondsLeft = value - (now - startTime) / 1000;

  function handlePause() {
    setIsPause(true);
    clearInterval(intervalId.current);
  }

  function handleReset() {
    clearInterval(intervalId.current);
    setNow(0);
    setStartTime(0);
    setIsPause(false);
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
