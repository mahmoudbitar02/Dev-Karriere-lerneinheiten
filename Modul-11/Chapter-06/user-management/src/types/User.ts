export enum Gender {
  MALE = "male",
  FEMALE = "female",
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
