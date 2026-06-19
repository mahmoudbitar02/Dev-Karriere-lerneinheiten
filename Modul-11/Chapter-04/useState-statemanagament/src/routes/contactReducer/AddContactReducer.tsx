import { useContext, useReducer } from "react";
import { contactContext, contactFormReducer, initialState, type FormContact } from "../../hook/contactReducer";
import axios from "axios";

function AddContactReducer() {
  const [formContact, formContactDispatch] = useReducer(contactFormReducer, initialState);

  function handleChangeInput(field: keyof FormContact) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      formContactDispatch({ type: "SET_FIELD", field, value: event.target.value });
    };
  }

  async function submitAddContact() {
    const response = await axios.post("http://contact-api.devkarriere.de/contacts", {
      email: formContact.email,
      name: { firstName: formContact.firstName, lastName: formContact.lastName },
      address: { city: formContact.city, street: formContact.street, number: formContact.number },
      phone: [{ label: formContact.phoneLabel, number: formContact.phoneNumber }],
    });

    contactDispatch({ type: "ADD_CONTACT", payload: response.data });

    formContactDispatch({ type: "RESET" });
  }

  return (
    <div>
      <p>
        <input type="text" value={formContact.firstName} onChange={handleChangeInput("firstName")} placeholder="Firstname" />
      </p>
      <p>
        <input type="text" value={formContact.lastName} onChange={handleChangeInput("lastName")} placeholder="lastname" />
      </p>
      <p>
        <input type="text" value={formContact.email} onChange={handleChangeInput("email")} placeholder="email" />
      </p>
      <p>
        <input type="text" value={formContact.city} onChange={handleChangeInput("city")} placeholder="city" />
      </p>
      <p>
        <input type="text" value={formContact.street} onChange={handleChangeInput("street")} placeholder="street" />
      </p>
      <p>
        <input type="text" value={formContact.postCode} onChange={handleChangeInput("postCode")} placeholder="postCode" />
      </p>
      <p>
        <input type="text" value={formContact.number} onChange={handleChangeInput("number")} placeholder="number" />
      </p>
      <p>
        <input type="text" value={formContact.phoneLabel} onChange={handleChangeInput("phoneLabel")} placeholder="phone label" />
      </p>
      <p>
        <input type="number" value={formContact.phoneNumber} onChange={handleChangeInput("phoneNumber")} placeholder="phone number" />
      </p>
      <button onClick={submitAddContact}>Add Contact</button>
    </div>
  );
}

export default AddContactReducer;
