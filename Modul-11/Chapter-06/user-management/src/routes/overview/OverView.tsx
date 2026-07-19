import { useContext } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

function OverView() {
  const { users } = useContext(UserContext);
  return (
    <div>
      {users.map((user) => (
        <Link to={`/edit/${user.id}`} key={`usercardlink${user.id}`}>
          <UserCard key={`usercard-${user.id}`} user={user} />
        </Link>
      ))}
    </div>
  );
}

export default OverView;
