import TextInput from "../../components/TextInput/TextInput";
import DateInput from "../../components/DateInput/DateInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import { useFormInput } from "../../hooks/useFormInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Gender, type User } from "../../types/User";

type UserFormProps = {
  user: User | undefined;
  onSubmit: (user: User) => void;
};

function UserForm({ user, onSubmit }: UserFormProps) {
  const userNameProps = useFormInput(user?.name ?? "", true);
  const dobProps = useFormInput(user?.dob ?? "", true);
  const genderProps = useFormInput(user?.gender ?? "", true);
  const emailProps = useFormInput(user?.email ?? "", true);
  const telephoneProps = useFormInput(user?.phone ?? "", true);
  const addressProps = useFormInput(user?.address ?? "", true);
  const websiteProps = useFormInput(user?.web ?? "", true);

  function convertStringToGender(value: string): Gender {
    switch (value) {
      case "Männlich":
        return Gender.MALE;
      case "Weiblich":
        return Gender.FEMALE;
      case "Keine Angaben":
        return Gender.OTHER;
      default:
        return Gender.NONE;
    }
  }

  function isValidInputs(): boolean {
    const isUserNameValid = userNameProps.validateInput(userNameProps.value);
    const isDobValid = dobProps.validateInput(dobProps.value);

    const isGenderValid = genderProps.validateInput(genderProps.value);
    const isEmailValid = emailProps.validateInput(emailProps.value);
    const isTelephoneValid = telephoneProps.validateInput(telephoneProps.value);
    const isAddressValid = addressProps.validateInput(addressProps.value);
    const isWebsiteValid = websiteProps.validateInput(websiteProps.value);
    return isUserNameValid && isAddressValid && isDobValid && isEmailValid && isGenderValid && isTelephoneValid && isWebsiteValid;
  }

  function handleSubmitUser() {
    if (isValidInputs()) {
      const submitedUser: User = {
        id: user?.id ?? Math.random(),
        name: userNameProps.value,
        dob: dobProps.value,
        gender: convertStringToGender(genderProps.value),
        email: emailProps.value,
        address: addressProps.value,
        phone: telephoneProps.value,
        web: websiteProps.value,
      };
      onSubmit(submitedUser);
    } else {
      alert("Bitte Informationen ergänzen");
    }
  }

  return (
    <>
      <div className="input-form-container">
        <div className="input-container">
          <span className="input-title">Username:</span>
          <TextInput value={userNameProps.value} onChange={userNameProps.handleInputChange} error={userNameProps.error} />
        </div>
        <div className="input-container">
          <span className="input-title">Geburtsdatum:</span>
          <DateInput value={dobProps.value} onChange={dobProps.handleInputChange} error={dobProps.error} />
        </div>
        <div className="input-container">
          <span className="input-title">Geschlecht:</span>
          <SelectInput
            value={genderProps.value}
            onChange={genderProps.handleInputChange}
            options={["", "Keine Angaben", "Männlich", "Weiblich"]}
            error={genderProps.error}
          />
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
        <SubmitButton onClick={handleSubmitUser} />
      </div>
    </>
  );
}

export default UserForm;
