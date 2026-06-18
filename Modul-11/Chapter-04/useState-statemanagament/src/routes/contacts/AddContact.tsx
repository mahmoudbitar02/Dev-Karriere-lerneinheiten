import axios from "axios";
import { useState } from "react";

function AddContact({ onContactCreated }: { onContactCreated: () => void }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [housNumber, setHousNumber] = useState("");
  const [phnoeLabel, setPhoneLabel] = useState("");
  const [phnoeNumber, setPhnoeNumber] = useState("");

  async function handleSubmit() {
    try {
      const response = await axios.post("http://contact-api.devkarriere.de/contacts", {
        email: email,
        name: {
          firstName: firstName,
          lastName: lastName,
        },

        phone: [
          {
            label: phnoeLabel,
            value: phnoeNumber,
          },
        ],

        address: {
          city: city,
          street: street,
          number: Number(housNumber),
        },
      });

      console.log(response);
      setFirstName("");
      setLastName("");
      setEmail("");
      setCity("");
      setStreet("");
      setHousNumber("");
      setPhoneLabel("");
      setPhnoeNumber("");

      onContactCreated();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <p>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="first name" />
      </p>
      <p>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="last name" />
      </p>
      <p>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      </p>
      <p>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="city" />
      </p>
      <p>
        <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="street" />
      </p>
      <p>
        <input type="text" value={housNumber} onChange={(e) => setHousNumber(e.target.value)} placeholder="hous number" />
      </p>
      <p>
        <input type="text" value={phnoeLabel} onChange={(e) => setPhoneLabel(e.target.value)} placeholder="phnoe label" />
      </p>
      <p>
        <input type="text" value={phnoeNumber} onChange={(e) => setPhnoeNumber(e.target.value)} placeholder="phnoe number" />
      </p>
      <button onClick={handleSubmit}>Add Contact</button>
    </>
  );
}

export default AddContact;
