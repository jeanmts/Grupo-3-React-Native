import { FatSecretFoodSearchResponse, FatSecretFood, } from '../types/fatsecret';
import { FoodResult } from '../types/search';

export function normalizeFoodSearchResponse(
  data: FatSecretFoodSearchResponse | undefined,
): FoodResult[] {
  if (!data || !data.foods || !data.foods.food) {
    return [];
  }

  const foodsRaw = data.foods.food;

  const foodsArray: FatSecretFood[] = Array.isArray(foodsRaw)
    ? foodsRaw
    : [foodsRaw];

  return foodsArray.map((food) => ({
    id: String(food.food_id),
    name: food.food_name,
    brand: food.brand_name ?? null,
    description: food.food_description ?? null,
  }));
}
