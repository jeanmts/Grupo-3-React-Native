// src/types/fatsecret.ts

// Estrutura básica da resposta do foods.search da FatSecret (formato JSON)
export interface FatSecretFood {
  food_id: string;
  food_name: string;
  brand_name?: string;
  food_description?: string;
}

// A API pode devolver um único objeto ou um array
export interface FatSecretFoodsWrapper {
  food: FatSecretFood | FatSecretFood[];
}

export interface FatSecretFoodSearchResponse {
  foods?: FatSecretFoodsWrapper;
}
