// Step 1: Import
import { useState, createContext } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

// Step 3: Include props
type UserContextType = {
  user: AuthUser | null
  setUser : React.Dispatch<React.SetStateAction<AuthUser | null>>
}


type UserContextProviderProps = {
  children: React.ReactNode;
};

// Step 2 & 4: Export

// Step 2:
export const UserContext = createContext(null);

// Step 4:
export const UserContextProviderProps = ({
  children,
}: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  return (
  <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
  )
}
