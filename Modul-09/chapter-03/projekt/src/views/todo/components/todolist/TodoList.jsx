import TodoHeader from "../todoheader/TodoHeader";
import TodoBody from "../todobody/TodoBody";
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([{ id: Math.random(), text: "Todo Item", done: false }]);
  function handleCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoItemIndex, 1, todoItem);
    setTodos(updatedTodos);
  }

  function addTodoItemToList(todoItem) {
    const updatedTodos = [...todos];
    updatedTodos.push(todoItem);
    setTodos(updatedTodos);
  }

  function deleteTodoItemFromList(todoId) {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  }

  return (
    <div>
      <TodoHeader addTodoItemToList={addTodoItemToList} />
      <TodoBody todos={todos} handleCheckbox={handleCheckbox} deleteTodoItemFromList={deleteTodoItemFromList} />
    </div>
  );
}

export default TodoList;
