import axios from "axios";

export default axios.create({
  baseURL: "https://api.nal.usda.gov/fdc/v1/foods",
  timeout: 10000,
  headers: { "Content-type": "application/json" },
});
