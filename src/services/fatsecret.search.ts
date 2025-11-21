// src/services/fatsecret.search.ts

import axios from 'axios';
import { FoodResult } from '../types/search';
import { FatSecretFoodSearchResponse } from '../types/fatsecret';
import { normalizeFoodSearchResponse } from '../utils/fatsecretNormalizer';

// Endpoint base da FatSecret
const FATSECRET_BASE_URL = 'https://platform.fatsecret.com/rest/server.api';

// Pessoa 5 escolheu implementar foods.search (busca de alimentos).
// Se quiser trocar pra recipes.search depois, basta trocar o "method".
export async function searchFood(
  query: string,
  authToken: string,
  authSecret: string,
): Promise<FoodResult[]> {
  // Proteção básica contra string vazia
  const trimmedQuery = query.trim();
  if (!trimmedQuery) {
    return [];
  }

  const params = new URLSearchParams();
  // Método principal da busca
  params.append('method', 'foods.search'); // OU 'recipes.search', se o grupo decidir
  params.append('search_expression', trimmedQuery);
  params.append('format', 'json');

  // Tokens que virão da Pessoa 4
  params.append('auth_token', authToken);
  params.append('auth_secret', authSecret);

  const response = await axios.post<FatSecretFoodSearchResponse>(
    FATSECRET_BASE_URL,
    params,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  // Aqui a Pessoa 5 trata e organiza a resposta antes de entregar pro contexto
  return normalizeFoodSearchResponse(response.data);
}
