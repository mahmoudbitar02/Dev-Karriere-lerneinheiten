import { useEffect, useReducer } from "react";
import { contactReducer } from "../../hook/contactReducer";
import axios from "axios";

function ContactsReducer() {
  const [contacts, dispatch] = useReducer(contactReducer, []);

  async function getContacts() {
    const response = await axios.get("http://contact-api.devkarriere.de/contacts");

    if (response.status === 200 && response.data.length > 0) dispatch({ type: "SET_CONTACT", pyload: response.data });
  }
  useEffect(() => {
    getContacts();
  }, []);

  function displayContact() {
    if (contacts) {
      return (
        <div>
          <h1>Contacts</h1>
          {contacts.map((contact, index) => (
            <div key={index}>
              <p>_______________________________________________________________</p>

              <div>
                <p>Vorname: {contact.name?.firstName}</p>
                <p>Nachname: {contact.name?.lastName}</p>
                <p>Email: {contact.email}</p>
                <p>ID: {contact.id}</p>
              </div>
              <div>
                <h4>Address</h4>
                <p>City: {contact.address?.city}</p>
                <p>Street: {contact.address?.street}</p>
                <p>Number: {contact.address?.number}</p>
              </div>
              <div>
                <h4>Telefonnummern</h4>
                {contact.phone?.map((item, index) => (
                  <div key={index}>
                    <p>Label: {item.label}</p>
                    <p>Number: {item.value}</p>
                    <p>––––––––––––––––––––</p>
                  </div>
                ))}
              </div>
              <p>_______________________________________________________________</p>
            </div>
          ))}
        </div>
      );
    } else {
      if (!contacts) {
        return <p>No contacts found</p>;
      }
    }
  }

  return <div>{displayContact()}</div>;
}

export default ContactsReducer;
