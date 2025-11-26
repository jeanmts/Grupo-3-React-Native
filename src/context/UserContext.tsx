import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import apiUsers from "../services/apiUsers";

export interface userDetails {
  id: string;
  nome: string;
  email: string;
  senha: string;
}

interface UserContextValue {
  results: userDetails[];
  allUsers?: userDetails[];
  userContexto?: userDetails;
  setUserContexto: React.Dispatch<React.SetStateAction<userDetails | undefined>>;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [results, setResults] = useState<userDetails[]>([]);
  const [allUsers, setAllUsers] = useState<userDetails[]>();
  const [userContexto, setUserContexto] = useState<userDetails>();

  const getAllUsers = async () => {
    try {
      const { data } = await apiUsers.get<userDetails[]>("/usuarios");
      setAllUsers(data);
    } catch (error) {
      console.log("Erro ao carregar usuários:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{ results, allUsers, userContexto, setUserContexto }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUserContext precisa estar dentro do UserProvider");
  return ctx;
}
