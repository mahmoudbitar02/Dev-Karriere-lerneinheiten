import { useState } from "react";
export function useFormInput(value: string) {
  const [inputValue, setInputValue] = useState(value);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    console.log("Input value changed:", event.target.value);
    setInputValue(event.target.value);
  }

  return { value: inputValue, handleInputChange };
}
