import "./userCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faCakeCandles, faEnvelope, faGlobe, faPhone, faVenusMars } from "@fortawesome/free-solid-svg-icons";
import type { User } from "../../types/User";
import DeleteButton from "../DeleteButton/DeleteButton";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  const { usersDispatch } = useContext(UserContext);
  function deleteUser(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    usersDispatch({ type: "REMOVE_USER", user });
    alert("Deleted user");
  }
  return (
    <div className="usercard-container">
      <DeleteButton onClick={deleteUser} />
      <div className="usercard-header">
        <img className="usercard-header-image" src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
      </div>
      <div className="usercard-body">
        <div className="usercard-body-title">
          <strong>{user.name}</strong>
        </div>
        <div className="usercard-body-content">
          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faCakeCandles} />
              </span>
              <span usercard-data-text>{new Date(user.dob).toLocaleDateString("de-DE", { year: "numeric", month: "2-digit", day: "2-digit" })}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faVenusMars} />
              </span>
              <span usercard-data-text>{user.gender}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span usercard-data-text>{user.email}</span>
            </div>
          </div>
          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
              <span usercard-data-text>{user.address}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span usercard-data-text>{user.phone}</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <span usercard-data-text>{user.web}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
