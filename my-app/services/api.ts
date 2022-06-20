import axios from "axios";

const api = axios.create({
  baseURL: "https://api.vexpenses.com",
});

export default api;
