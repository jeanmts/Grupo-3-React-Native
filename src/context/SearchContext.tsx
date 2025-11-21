// src/context/SearchContext.tsx

import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from 'react';

import { FoodResult } from '../types/search';
import { searchFood } from '../services/fatsecret.search';

// O que o contexto expõe para o resto do app
interface SearchContextValue {
  results: FoodResult[];
  search: (query: string) => Promise<void>;
}

// Criamos o contexto, mas sem valor inicial concreto
const SearchContext = createContext<SearchContextValue | undefined>(undefined);

// Props do Provider da Pessoa 5
// A Pessoa 4 vai fornecer authToken e authSecret (via props, outro contexto, etc.)
interface SearchProviderProps {
  children: ReactNode;
  authToken: string;
  authSecret: string;
}

// Provider responsável por:
// - manter o estado "results"
// - executar searchFood e salvar o resultado no contexto
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
    [authToken, authSecret],
  );

  return (
    <SearchContext.Provider value={{ results, search }}>
      {children}
    </SearchContext.Provider>
  );
};

// Hook de conveniência para a galera (Pessoa 6) consumir o contexto
export const useSearch = (): SearchContextValue => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
};
