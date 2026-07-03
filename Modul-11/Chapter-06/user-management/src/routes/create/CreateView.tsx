import TextInput from "../../components/TextInput/TextInput";
import { useFormInput } from "../../hooks/useFormInput";
import "./CreateView.scss";
function CreateView() {
  const userNameProps = useFormInput("");
  const dobProps = useFormInput("");
  const genderProps = useFormInput("");
  const emailProps = useFormInput("");
  const telephoneProps = useFormInput("");
  const addressProps = useFormInput("");
  const websiteProps = useFormInput("");

  return (
    <>
      <div className="input-form-container">
        <div className="input-container">
          <span className="input-title">Username:</span> <br />
          <TextInput value={userNameProps.value} onChange={userNameProps.handleInputChange} />
        </div>
        <div className="input-container">
          <span className="input-title">Geburtsdatum:</span> <br />
          <TextInput value={dobProps.value} onChange={dobProps.handleInputChange} />
        </div>
        <div className="input-container">
          <span className="input-title">Geschlecht:</span> <br />
          <TextInput value={genderProps.value} onChange={genderProps.handleInputChange} />
        </div>
        <div className="input-container">
          <span className="input-title">Email:</span> <br />
          <TextInput value={emailProps.value} onChange={emailProps.handleInputChange} />
        </div>
        <div className="input-container">
          <span className="input-title">Telefon:</span> <br />
          <TextInput value={telephoneProps.value} onChange={telephoneProps.handleInputChange} />
        </div>
        <div className="input-container">
          <span className="input-title">Adresse:</span> <br />
          <TextInput value={addressProps.value} onChange={addressProps.handleInputChange} />
        </div>
        <div className="input-container">
          <span className="input-title">Website:</span> <br />
          <TextInput value={websiteProps.value} onChange={websiteProps.handleInputChange} />
        </div>
      </div>
    </>
  );
}

export default CreateView;
