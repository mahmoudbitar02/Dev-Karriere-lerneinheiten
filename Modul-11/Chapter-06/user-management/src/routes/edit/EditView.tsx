import { useContext, useEffect, useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { UserContext } from "../../context/UserContext";
import type { User } from "../../types/User";
import { useNavigate, useParams } from "react-router-dom";

function EditView() {
  const [editUser, setEditUser] = useState<User | undefined>();
  const navigate = useNavigate();

  const { users, usersDispatch } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    const user = users.find((user) => "" + user.id === id);
    setEditUser(user);
  }, [users, id]);

  function updateUser(user: User) {
    usersDispatch({ type: "UPDATE_USER", user: user });
    alert("Updated User");
    navigate(-1);
  }

  function displayUser() {
    if (editUser) {
      return <UserForm user={editUser} onSubmit={updateUser} />;
    } else {
      return "User not found";
    }
  }

  return displayUser();
}

export default EditView;
