import { createContext, useContext, useState, ReactNode } from "react";

interface NutritionGoals {
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
}

interface UserContextValue {
  name: string;
  setName: (v: string) => void;

  goals: NutritionGoals;
  updateGoals: (g: Partial<NutritionGoals>) => void;

  darkMode: boolean;
  toggleDarkMode: () => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("Guest User");

  const [goals, setGoals] = useState<NutritionGoals>({
    calories: 2200,
    carbs: 250,
    protein: 150,
    fat: 70,
  });

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((p) => !p);

  const updateGoals = (update: Partial<NutritionGoals>) => {
    setGoals((old) => ({ ...old, ...update }));
  };

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        goals,
        updateGoals,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser deve ser usado dentro de UserProvider");
  }

  return context;
};