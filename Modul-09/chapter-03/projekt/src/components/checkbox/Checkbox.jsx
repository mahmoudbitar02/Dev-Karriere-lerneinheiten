function Checkbox({ todoItem, handleCheckbox }) {
  function handelChangeCheckboxEvent(event) {
    const updatedTodoItem = { ...todoItem };
    updatedTodoItem.done = event.target.checked;
    handleCheckbox(updatedTodoItem);
  }
  return (
    <div>
      <input id={todoItem.id} type="checkbox" checked={todoItem.done} onChange={handelChangeCheckboxEvent} />
      <label htmlFor={todoItem.id}>{todoItem.text}</label>
    </div>
  );
}
export default Checkbox;
