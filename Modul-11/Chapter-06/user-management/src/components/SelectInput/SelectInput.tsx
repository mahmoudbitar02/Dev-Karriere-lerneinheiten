type SelectInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

function SelectInput({ value, onChange, options }: SelectInputProps) {
  return (
    <select value={value} onChange={onChange} className="input-text">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
