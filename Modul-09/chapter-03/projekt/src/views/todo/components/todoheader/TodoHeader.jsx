import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";
import { useState } from "react";
function TodoHeader({ addTodoItemToList }) {
  const [inputValue, setInputValue] = useState("");
  function handleInputChangeEvent(event) {
    setInputValue(event.target.value);
  }
  function handleAddTodoItemEvent() {
    addTodoItemToList({ id: Math.random(), content: inputValue, done: false });
    setInputValue("");
  }
  return (
    <div>
      <Input inputValue={inputValue} handleInputChangeEvent={handleInputChangeEvent} />
      <Button buttonValue={"Add"} handleButtonClickEvent={handleAddTodoItemEvent} />
    </div>
  );
}

export default TodoHeader;
