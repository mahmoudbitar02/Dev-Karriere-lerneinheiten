import "./TextInput.scss";
type TextInputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function TextInput({ value, onChange }: TextInputProps) {
  return <input className="input-text" type="text" value={value} onChange={onChange} />;
}

export default TextInput;
