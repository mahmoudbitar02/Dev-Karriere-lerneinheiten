import { createContext } from "react";

export type Contact = {
  email: string;
  id: number;
  name?: { firstName: string; lastName: string };
  address?: { street: string; city: string; number: string; postcode: string };
  phone: [{ label?: string; number?: number }];
};

export type FormContact = {
  email: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  number: string;
  postCode: string;
  phoneLabel: string;
  phoneNumber: number;
};

export const initialState: FormContact = {
  email: "",
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  number: "",
  postCode: "",
  phoneLabel: "",
  phoneNumber: 0,
};

type ContactAction = { type: "SET_CONTACT"; payload: Contact[] } | { type: "ADD_CONTACT"; payload: Contact };

type FormContactAction = { type: "SET_FIELD"; field: keyof FormContact; value: string | number } | { type: "RESET" };

export function contactReducer(state: Contact[], action: ContactAction) {
  switch (action.type) {
    case "SET_CONTACT":
      return action.payload;

    case "ADD_CONTACT":
      return [action.payload, ...state];

    default:
      return state;
  }
}

export function contactFormReducer(state: FormContact, action: FormContactAction) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

type ContactContext = {
  contacts: Contact[];
  contactDispatch: React.Dispatch<ContactAction>;
};

export const contactContext = createContext<ContactContext | undefined>(undefined);
