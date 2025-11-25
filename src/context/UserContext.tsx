import {
  Children,
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import apiUsers from "../services/apiUsers";

export interface userDetails {
  id: string;
  nome: string;
  email: string;
  senha: string;
}

interface UserContextValue {
  results: userDetails[];
  allUsers: userDetails[] | undefined;
  userContexto?: userDetails;
  setUserContexto: React.Dispatch<
    React.SetStateAction<userDetails | undefined>
  >;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);
const [allUsers, setAllUsers] = useState<userDetails[]>();

interface UserProviderProps {
  children: ReactNode;
}

const getAllUsers = async () => {
  const { data } = await apiUsers.get<userDetails[]>("/usuarios");

  setAllUsers(data);
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [results, setResults] = useState<userDetails[]>([]);
  const [userContexto, setUserContexto] = useState<userDetails>();
  return (
    <UserContext.Provider
      value={{ results, allUsers, userContexto, setUserContexto }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const userContext = useContext(UserContext);
