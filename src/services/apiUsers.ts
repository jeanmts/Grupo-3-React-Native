import axios from "axios";

export default axios.create({
  baseURL: "https://690a7b941a446bb9cc22ac28.mockapi.io",
  timeout: 10000,
  headers: { "Content-type": "application/json" },
});
