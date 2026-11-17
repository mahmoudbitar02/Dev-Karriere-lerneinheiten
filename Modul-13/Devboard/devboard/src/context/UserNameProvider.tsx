import { useState } from "react";
import { UserNameContext } from "./UserNameContext";

export function UserNameProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState<string>(getUserNameFromLocalStorage);
  function getUserNameFromLocalStorage() {
    const storedName = localStorage.getItem("kanban-user-name");
    return storedName ?? "";
  }
  return <UserNameContext.Provider value={{ userName: userName, setUserName: setUserName }}>{children}</UserNameContext.Provider>;
}
