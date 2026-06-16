import { useParams } from "react-router-dom";

function Edit() {
  const { itemId } = useParams();
  return (
    <>
      {" "}
      <div>edit {itemId}</div>
    </>
  );
}

export default Edit;
