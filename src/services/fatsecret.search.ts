import axios from 'axios';
import { FoodResult } from '../types/search';
import { FatSecretFoodSearchResponse } from '../types/fatsecret';
import { normalizeFoodSearchResponse } from '../utils/fatsecretNormalizer';

const FATSECRET_BASE_URL = 'https://platform.fatsecret.com/rest/server.api';

export async function searchFood(
  query: string,
  authToken: string,
  authSecret: string,
): Promise<FoodResult[]> {

  const trimmedQuery = query.trim();
  if (!trimmedQuery) {
    return [];
  }

  const params = new URLSearchParams();

  params.append('method', 'foods.search');
  params.append('search_expression', trimmedQuery);
  params.append('format', 'json');
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

  return normalizeFoodSearchResponse(response.data);
}