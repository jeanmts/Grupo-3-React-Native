import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

interface AuthUser {
  id: string;
  nome: string;
  email: string;
  foto?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (user: AuthUser) => Promise<void>; 
  logout: () => Promise<void>;
  loading: boolean; 
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const USER_STORAGE_KEY = "@authUser";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    async function loadStoredAuth() {
      try {
        const storedUser = await AsyncStorage.getItem(USER_STORAGE_KEY);
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (e) {
        console.error("Erro ao carregar dados de autenticação:", e);
      } finally {
        setLoading(false); 
      }
    }
    loadStoredAuth();
  }, []);

  const login = async (userData: AuthUser) => {
    try {
    
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
    
      setUser(userData);
    } catch (e) {
      console.error("Erro ao salvar dados de login:", e);
    }
  };

  const logout = async () => {
    try {
      
      await AsyncStorage.removeItem(USER_STORAGE_KEY);
     
      setUser(null);
    } catch (e) {
      console.error("Erro ao fazer logout:", e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}