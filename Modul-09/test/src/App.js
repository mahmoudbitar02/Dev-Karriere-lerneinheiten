import "./App.css";

function Button(props) {
  console.log(props);
  return (
    <button type="button">
      {props.text} + {props.count}
    </button>
  );
}

function Button2({ text, count }) {
  return (
    <button type="button">
      {text} + {count}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <Button text="Klick mich!" count={0} />
      <Button2 text="Klick mich!" count={10} />
    </div>
  );
}

export default App;
