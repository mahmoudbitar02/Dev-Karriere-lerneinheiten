import { useEffect, useReducer } from "react";
import { contactReducer } from "../../hook/contactReducer";
import axios from "axios";
import AddContactReducer from "./AddContactReducer";
import { contactContext } from "../../hook/contactReducer";

function ContactsReducer() {
  const [contacts, contactDispatch] = useReducer(contactReducer, []);

  async function getContacts() {
    try {
      const response = await axios.get("http://contact-api.devkarriere.de/contacts");
      if (response.status === 200 && response.data.length > 0) contactDispatch({ type: "SET_CONTACT", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  function displayContacts() {
    if (contacts) {
      return (
        <>
          <h1>Contacts</h1>
          {contacts.map((contact, index) => (
            <div key={index}>
              <p>_________________________________________________</p>

              <div>
                <p>Firstname: {contact.name?.firstName}</p>
                <p>Lastname: {contact.name?.lastName}</p>
                <p>Email: {contact.email}</p>
                <p>ID: {contact.id}</p>
              </div>
              <div>
                <h4>Address</h4>
                <p>
                  Street: {contact.address?.street}/ {contact.address?.number}
                </p>

                <p>
                  Postcode: {contact.address?.postcode}, City: {contact.address?.city}
                </p>
              </div>

              <div>
                <h4>Telefonnummern</h4>
                {contact.phone?.map((item, index) => (
                  <div key={index}>
                    <p>Phone Label: {item.label}</p>
                    <p>Phone Number: {item.number}</p>
                    <p>-----------------------</p>
                  </div>
                ))}
              </div>
              <p>_________________________________________________</p>
            </div>
          ))}
        </>
      );
    }
  }
  return <div></div>;
}

export default ContactsReducer;
