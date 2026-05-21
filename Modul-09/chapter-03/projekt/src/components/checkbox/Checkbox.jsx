function Checkbox({ id, checked, content, handleCheckbox }) {
  return (
    <div>
      <input id={id} type="checkbox" checked={checked} onChange={handleCheckbox} />
      <label htmlFor={id}> {content}</label>
    </div>
  );
}
export default Checkbox;
