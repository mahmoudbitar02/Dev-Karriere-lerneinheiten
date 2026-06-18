import axios from "axios";
import { useEffect, useState } from "react";
import AddContact from "./AddContact";

type Contact = {
  id: number;
  email: string;

  name?: {
    firstName?: string;
    lastName?: string;
  };

  phone?: [
    {
      label?: string;
      value?: string;
    },
  ];

  address?: {
    street?: string;
    city?: string;
    number?: number;
    postcode?: number;
  };
};

function Contact() {
  const [contact, setContact] = useState<Contact[] | null>(null);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    getContact();
  }, []);

  async function triggerReload() {
    await getContact();
  }

  //   async function triggerReload() {
  //     console.log("reload triggered");

  //     const res = await axios.get("http://contact-api.devkarriere.de/contacts");
  //     console.log("NEW DATA:", res.data);

  //     setContact(res.data);
  //   }

  async function getContact() {
    try {
      const response = await axios.get("http://contact-api.devkarriere.de/contacts");
      if (response.status === 200 && response.data.length > 0) {
        setContact(response.data);
      } else {
        setContact(null);
        setErrorText(response.statusText);
      }
    } catch (error) {}
  }

  function displayPosts() {
    if (contact) {
      return (
        <>
          <div>
            <h1>Contacts</h1>

            {contact.map((cont, index) => (
              <div key={index}>
                <p>_______________________________________________</p>

                <div>
                  <p>Vorname: {cont.name?.firstName}</p>
                  <p>Nachname: {cont.name?.lastName}</p>
                </div>
                <p>Email: {cont.email}</p>
                <p>ID: {cont.id}</p>
                <div>
                  <h4>Address</h4>
                  <p>City: {cont.address?.city}</p>
                  <p>Postcode: {cont.address?.postcode}</p>
                  <p>
                    Street & Number: {cont.address?.street} / {cont.address?.number}
                  </p>
                </div>
                <div>
                  <h4>Telefonnummern</h4>
                  {cont.phone?.map((phone, index) => (
                    <div key={index}>
                      <p>Label: {phone.label}</p>
                      <p>Nummer: {phone.value}</p>
                    </div>
                  ))}
                </div>

                <p>_______________________________________________</p>
              </div>
            ))}
          </div>
        </>
      );
    } else {
      if (!contact) {
        return <p>{errorText || "No contacts found"}</p>;
      }
    }
  }

  return (
    <div>
      <AddContact onContactCreated={triggerReload} />
      {displayPosts()}
    </div>
  );
}

export default Contact;
