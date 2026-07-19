import { useContext } from "react";
import UserForm from "../../components/UserForm/UserForm";
import type { User } from "../../types/User";
import "./CreateView.scss";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function CreateView() {
  const { usersDispatch } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmitNewUser(user: User) {
    usersDispatch({ type: "ADD_USER", user: user });
    alert("Added user");
    navigate(-1);
  }

  return <UserForm user={undefined} onSubmit={handleSubmitNewUser} />;
}

export default CreateView;
