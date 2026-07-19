import { useContext } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { UserContext } from "../../context/UserContext";

function OverView() {
  const { users } = useContext(UserContext);
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default OverView;
