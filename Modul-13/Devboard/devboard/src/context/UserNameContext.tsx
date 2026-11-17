import { createContext } from "react";
type UserNameContextType = {
  userName: string;
  setUserName: (username: string) => void;
};

export const UserNameContext = createContext<UserNameContextType | null>(null);
