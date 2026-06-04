import { useState } from "react";
function useInfo(initialVorname: string) {
  const [name, setName] = useState(initialVorname);

  const handleVornameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log("Vorname updated:", e.target.value);
  };

  return {
    name,

    handleVornameChange,
  };
}

function useAlter() {
  const [alter, setAlter] = useState<number | "">("");

  const handleAlterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAlter(value === "" ? "" : Number(value));
  };
  return {
    alter,
    handleAlterChange,
  };
}

export { useInfo, useAlter };
