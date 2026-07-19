import type { ValidationError } from "../../types/Validation";

type DateInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: ValidationError;
};

function DateInput({ value, onChange, error }: DateInputProps) {
  function displayError() {
    if (error.isError) {
      return <span className="input-error">{error.errorMessage}</span>;
    }
  }
  return (
    <>
      <input className="input-text" type="date" value={value} onChange={onChange} />
      {displayError()}
    </>
  );
}

export default DateInput;
