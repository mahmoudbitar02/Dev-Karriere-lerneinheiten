export enum Gender {
  MALE = "Männlich",
  FEMALE = "Weiblich",
  OTHER = "keine angaben",
  NONE = "",
}

export type User = {
  id: number;
  name: string;
  email: string;
  gender: Gender;
  address: string;
  phone: string;
  web: string;
  dob: string;
};
