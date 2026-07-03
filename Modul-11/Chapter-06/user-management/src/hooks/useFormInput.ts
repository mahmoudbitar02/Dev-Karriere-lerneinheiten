import { useState } from "react";
export function useFormInput(value: string) {
  const [inputValue, setInputValue] = useState(value);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return { value: inputValue, handleInputChange };
}
