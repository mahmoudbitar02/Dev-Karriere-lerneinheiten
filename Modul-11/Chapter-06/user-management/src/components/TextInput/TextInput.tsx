import type { ValidationError } from "../../types/Validation";
import "./TextInput.scss";
type TextInputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error: ValidationError;
};

function TextInput({ value, onChange, error }: TextInputProps) {
  function displayError() {
    if (error.isError) {
      return <span className="input-error">{error.errorMessage}</span>;
    }
  }
  return (
    <>
      <input className="input-text" type="text" value={value} onChange={onChange} />
      {displayError()}
    </>
  );
}

export default TextInput;
