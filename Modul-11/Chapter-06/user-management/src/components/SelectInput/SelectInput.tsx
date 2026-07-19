import type { ValidationError } from "../../types/Validation";

type SelectInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  error: ValidationError;
};

function SelectInput({ value, onChange, options, error }: SelectInputProps) {
  function displayError() {
    if (error.isError) {
      return <span className="input-error">{error.errorMessage}</span>;
    }
  }
  return (
    <>
      <select value={value} onChange={onChange} className="input-text">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {displayError()}
    </>
  );
}

export default SelectInput;
