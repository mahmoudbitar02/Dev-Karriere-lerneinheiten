import { useEffect } from "react";
import { useFormInput } from "./hooks/useFormInput";

import "./App.css";

function App() {
  const vorname = useFormInput("");
  const nachname = useFormInput("");

  useEffect(() => {});

  return (
    <>
      Vorname: <input placeholder="Vorname" value={vorname.value} onChange={vorname.handleInputChange} />
      Nachname: <input placeholder="Nachname" value={nachname.value} onChange={nachname.handleInputChange} />
      {vorname.value && <p>Hallo {vorname.value}!</p>}
      {nachname.value && <p>Hallo {nachname.value}!</p>}
    </>
  );
}

export default App;
