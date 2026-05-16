import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Buttons";

function App() {
  function handelAlert(buttonAlert) {
    alert(buttonAlert);
  }
  return (
    <>
      <Button text={"Das ist ein Text"} aUser={handelAlert} />
      <Button text={"Spannende Info"} aUser={handelAlert} />
      <Button text={"Toller Textf"} aUser={handelAlert} />
    </>
  );
}

export default App;
