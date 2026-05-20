import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";

function TodoItem({ todoItem, handleCheckbox }) {
  return (
    <div>
      <Checkbox todoItem={todoItem} handleCheckbox={handleCheckbox} />
      <Button buttonValue={"Löschen"} />
    </div>
  );
}

export default TodoItem;
