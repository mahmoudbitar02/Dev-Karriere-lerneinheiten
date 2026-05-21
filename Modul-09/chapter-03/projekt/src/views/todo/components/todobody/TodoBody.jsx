import TodoItem from "../todoitem/Todoitem";
function TodoBody({ todos, handleCheckbox, deleteTodoItemFromList }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todoItem={todo} handleCheckbox={handleCheckbox} deleteTodoItemFromList={deleteTodoItemFromList} />
      ))}
    </div>
  );
}

export default TodoBody;
