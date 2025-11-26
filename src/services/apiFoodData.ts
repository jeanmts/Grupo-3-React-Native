import axios from "axios";

const apiFoodData = axios.create({
  baseURL: "https://api.nal.usda.gov/fdc/v1/foods",
  timeout: 10000,
  headers: { "Content-type": "application/json" },
});

export default apiFoodData;

const API_KEY = process.env.EXPO_PUBLIC_API_URL;

export const searchFoods = (searchQuery: string) => {
  if (!API_KEY) {
    throw new Error("API_KEY_FOOD_DATA não configurada!");
  }

  return apiFoodData.get("/search", {
    params: {
      query: searchQuery,
      api_key: API_KEY,
      pageSize: 25,
    },
  });
};
