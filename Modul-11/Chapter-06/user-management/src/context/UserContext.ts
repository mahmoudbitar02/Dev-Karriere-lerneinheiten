import { createContext } from "react";
import type { UserManagementAction, UserManagementState } from "../hooks/userManagementReducer";

export const UserContext = createContext<{ users: UserManagementState; usersDispatch: React.Dispatch<UserManagementAction> }>({
  users: [],
  usersDispatch: () => {},
});
