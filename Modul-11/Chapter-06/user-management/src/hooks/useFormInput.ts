import { useState } from "react";
import type { ValidationError } from "../types/Validation";
export function useFormInput(value: string, required = false) {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState<ValidationError>({ isError: false, errorMessage: "" });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    console.log("Input value changed:", event.target.value);
    const inputValue = event.target.value;
    setInputValue(inputValue);
    validateInput(inputValue);
  }

  function validateInput(inputValue: string): boolean {
    if (required) {
      if (inputValue === "") {
        //setze einen fehler
        setError({ isError: true, errorMessage: "Bitte geben Sie einen Wert ein" });
        return false;
      } else {
        // resette Fehler
        setError({ isError: false, errorMessage: "" });
        return true;
      }
    }
    return true;
  }

  return { value: inputValue, handleInputChange, error: error, validateInput: validateInput };
}
