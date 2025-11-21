export interface FatSecretFood {
  food_id: string;
  food_name: string;
  brand_name?: string;
  food_description?: string;
}
export interface FatSecretFoodsWrapper {
  food: FatSecretFood | FatSecretFood[];
}

export interface FatSecretFoodSearchResponse {
  foods?: FatSecretFoodsWrapper;
}
