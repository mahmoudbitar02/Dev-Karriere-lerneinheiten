import "./userCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faCakeCandles, faEnvelope, faGlobe, faPhone, faVenusMars } from "@fortawesome/free-solid-svg-icons";

function UserCard() {
  return (
    <div className="usercard-container">
      <div className="usercard-header">
        <img className="usercard-header-image" src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
      </div>
      <div className="usercard-body">
        <div className="usercard-body-title">
          <strong>Mahmoud</strong>
        </div>
        <div className="usercard-body-content">
          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faCakeCandles} />
              </span>
              <span usercard-data-text>01.01.1970</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faVenusMars} />
              </span>
              <span usercard-data-text>Männlich</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span usercard-data-text>test@test.de</span>
            </div>
          </div>
          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
              <span usercard-data-text>Musterstr. 1</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span usercard-data-text>1234557788</span>
            </div>
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faGlobe} />
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <span usercard-data-text>www.test.de</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
