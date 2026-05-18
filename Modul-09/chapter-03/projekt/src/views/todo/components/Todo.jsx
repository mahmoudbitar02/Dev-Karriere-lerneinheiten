import { useState } from "react";
import TodoItem from "./todoitem/Todoitem";

function Todo() {
  const [todos, setTodos] = useState([{ id: Math.random(), text: "Todo Item", done: false }]);

  function handleCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoItemIndex, 1, todoItem);
    setTodos(updatedTodos);
  }
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todoItem={todo} handleCheckbox={handleCheckbox} />
      ))}
    </div>
  );
}

export default Todo;
