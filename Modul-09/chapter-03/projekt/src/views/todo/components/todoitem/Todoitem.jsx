import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";
import "./TodoItem.css";

function TodoItem({ todoItem, handleCheckbox, deleteTodoItemFromList }) {
  function handleDeleteTodoItem() {
    deleteTodoItemFromList(todoItem.id);
  }
  function handelChangeCheckboxEvent(event) {
    const updatedTodoItem = { ...todoItem };
    updatedTodoItem.done = event.target.checked;
    handleCheckbox(updatedTodoItem);
  }
  return (
    <div className="todo-item">
      <Checkbox id={todoItem.id} checked={todoItem.done} content={todoItem.content} handleCheckbox={handelChangeCheckboxEvent} />
      <Button buttonValue={"Löschen"} handleButtonClickEvent={handleDeleteTodoItem} />
    </div>
  );
}

export default TodoItem;
