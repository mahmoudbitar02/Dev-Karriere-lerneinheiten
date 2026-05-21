import TodoItem from "../todoitem/Todoitem";
import "./TodoBody.css";
function TodoBody({ todos, handleCheckbox, deleteTodoItemFromList }) {
  function showNoTodoItems() {
    if (todos.length === 0) {
      return <span>Kein Todo's</span>;
    }
  }
  return (
    <div className="todo-body">
      {todos.map((todo) => (
        <TodoItem todoItem={todo} handleCheckbox={handleCheckbox} deleteTodoItemFromList={deleteTodoItemFromList} />
      ))}
      {showNoTodoItems()}
    </div>
  );
}

export default TodoBody;
