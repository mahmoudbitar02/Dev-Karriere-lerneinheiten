
type DateInputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function DateInput({value,onChange}: DateInputProps) {
  return (
    <input className="input-text" type="date" value={value} onChange={onChange} />
      
    
  )
}

export default DateInput
