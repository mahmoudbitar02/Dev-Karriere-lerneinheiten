function Input({ handleInputChangeEvent, inputValue }) {
  return <input type="text" placeholder="Gib hier etwas ein..." value={inputValue} onChange={handleInputChangeEvent} />;
}

export default Input;
