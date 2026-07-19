import { useContext } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import "./OverView.scss";

function OverView() {
  const { users } = useContext(UserContext);
  return (
    <div className="overview-body">
      {users.map((user) => (
        <Link to={`/edit/${user.id}`} key={`usercardlink${user.id}`}>
          <UserCard key={`usercard-${user.id}`} user={user} />
        </Link>
      ))}
    </div>
  );
}

export default OverView;
