// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import "./App.css";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    // signInWithGithub()
    fetchSession();
    const {
      data: { subscription },
    } = supabase.auth.onAuth;
  }, []);
  return (
    <>
      <p>hallo</p>
    </>
  );
}

export default App;
