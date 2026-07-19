import { useContext } from "react";
import UserForm from "../../components/UserForm/UserForm";
import type { User } from "../../types/User";
import "./CreateView.scss";
import { UserContext } from "../../context/UserContext";

function CreateView() {
  const { usersDispatch } = useContext(UserContext);

  function handleSubmitNewUser(user: User) {
    usersDispatch({ type: "ADD_USER", user: user });
    alert("Added user");
  }

  return <UserForm user={undefined} onSubmit={handleSubmitNewUser} />;
}

export default CreateView;
