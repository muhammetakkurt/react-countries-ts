import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v2",
  timeout: 1000,
  headers: {},
});

export default api;
