import TextInput from "../../components/TextInput/TextInput";
import DateInput from "../../components/DateInput/DateInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import { useFormInput } from "../../hooks/useFormInput";
import "./CreateView.scss";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
function CreateView() {
  const userNameProps = useFormInput("", true);
  const dobProps = useFormInput("", true);
  const genderProps = useFormInput("", true);
  const emailProps = useFormInput("", true);
  const telephoneProps = useFormInput("", true);
  const addressProps = useFormInput("", true);
  const websiteProps = useFormInput("", true);

  return (
    <>
      <div className="input-form-container">
        <div className="input-container">
          <span className="input-title">Username:</span>
          <TextInput value={userNameProps.value} onChange={userNameProps.handleInputChange} error={userNameProps.error} />
        </div>
        <div className="input-container">
          <span className="input-title">Geburtsdatum:</span>
          <DateInput value={dobProps.value} onChange={dobProps.handleInputChange} />
        </div>
        <div className="input-container">
          <span className="input-title">Geschlecht:</span>
          <SelectInput value={genderProps.value} onChange={genderProps.handleInputChange} options={["Männlich", "Weiblich"]} />
        </div>
        <div className="input-container">
          <span className="input-title">Email:</span>
          <TextInput value={emailProps.value} onChange={emailProps.handleInputChange} error={emailProps.error} />
        </div>
        <div className="input-container">
          <span className="input-title">Telefon:</span>
          <TextInput value={telephoneProps.value} onChange={telephoneProps.handleInputChange} error={telephoneProps.error} />
        </div>
        <div className="input-container">
          <span className="input-title">Adresse:</span>
          <TextInput value={addressProps.value} onChange={addressProps.handleInputChange} error={addressProps.error} />
        </div>
        <div className="input-container">
          <span className="input-title">Website:</span>
          <TextInput value={websiteProps.value} onChange={websiteProps.handleInputChange} error={websiteProps.error} />
        </div>
        <SubmitButton />
      </div>
    </>
  );
}

export default CreateView;
