import React, { createContext, useCallback, useContext, useState, ReactNode,} from "react";
import { FoodResult } from "../types/search";
import { searchFood } from "../services/fatsecret.search";

interface SearchContextValue {
  results: FoodResult[];
  search: (query: string) => Promise<void>;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
  authToken: string;
  authSecret: string;
}

export const SearchProvider = ({
  children,
  authToken,
  authSecret,
}: SearchProviderProps) => {
  const [results, setResults] = useState<FoodResult[]>([]);

  const search = useCallback(
    async (query: string) => {
      // Chama o serviço da FatSecret
      const foods = await searchFood(query, authToken, authSecret);
      // Salva no contexto (não usa AsyncStorage)
      setResults(foods);
    },
    [authToken, authSecret]
  );

  return (
    <SearchContext.Provider value={{ results, search }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextValue => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
};
