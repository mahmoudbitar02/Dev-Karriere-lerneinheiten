export type Contact = {
  id: number;
  email: string;
  name?: {
    firstName: string;
    lastName: string;
  };
  address?: {
    city: string;
    street: string;
    number: number;
  };
  phone?: [
    {
      label?: string;
      value?: string;
    },
  ];
};

export type Action = { type: "SET_CONTACT"; pyload: Contact[] } | { type: "ADD_CONTACT"; pyload: Contact };

export function contactReducer(state: Contact[], action: Action) {
  switch (action.type) {
    case "SET_CONTACT":
      return action.pyload;

    case "ADD_CONTACT":
      return [action.pyload, ...state];

    default:
      return state;
  }
}
