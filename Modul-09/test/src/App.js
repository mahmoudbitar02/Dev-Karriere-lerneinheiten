import "./App.css";
import Button from "./components/Button";

function Button2({ text, count, aUser }) {
  return (
    <button type="button" onClick={aUser}>
      {text} + {count} + " (mit onClick)"
    </button>
  );
}

function App() {
  function alertUser(buttonText) {
    alert(buttonText);
  }

  const buttonList = [
    { buttonName: "Klick mich!", title: "Test", aUser: alertUser, bgColor: "blue" },
    { buttonName: "Klick mich!", title: "Test", aUser: alertUser, bgColor: "red" },
  ];

  return (
    <div className="App">
      {/* <Button text={"Klick mich!"} count={0} aUser={alertUser} statFromButton={true} />
      <Button text={"Klick mich!"} count={"Hallo Welt!"} aUser={alertUser} statFromButton={true} />
      <Button text={"Klick mich!"} count={0} aUser={alertUser} statFromButton={false} />
      <Button2 text={"Klick mich!"} count={10} aUser={alertUser} /> */}

      {buttonList.map((button) => {
        return <Button buttonName={button.buttonName} title={button.title} aUser={button.aUser} statFromButton={true} bgColor={button.bgColor} />;
      })}
      {/* <Button buttonName={"Klick mich!"} title={"Test"} aUser={alertUser} statFromButton={true} bgColor={"blue"} />
      <Button buttonName={"Klick mich!"} title={"Test"} aUser={alertUser} statFromButton={true} bgColor={"red"} /> */}
    </div>
  );
}

export default App;
