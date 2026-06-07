function Timer() {
  return (
    <>
      <h1 className="timer__title">Zeit festlegen</h1>
      <input className="timer__input" type="number" placeholder="Sekunden" />
      <div>
        <h2 className="timer__time-left">
          Time left: <p className="timer__time-left-value">0</p>
        </h2>
        <button className="timer__button">Start</button>
        <button className="timer__button">Pause</button>
        <button className="timer__button">Reset</button>
      </div>
    </>
  );
}

export default Timer;
