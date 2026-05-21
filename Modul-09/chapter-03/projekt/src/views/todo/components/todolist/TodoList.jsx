import TodoHeader from "../todoheader/TodoHeader";
import TodoBody from "../todobody/TodoBody";
import { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
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
    <div className="todo-list">
      <TodoHeader addTodoItemToList={addTodoItemToList} />
      <TodoBody todos={todos} handleCheckbox={handleCheckbox} deleteTodoItemFromList={deleteTodoItemFromList} />
    </div>
  );
}

export default TodoList;
