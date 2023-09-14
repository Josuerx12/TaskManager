import axios from "axios";

export const api = axios.create({
  baseURL: "http://3.139.75.39:8080/",
  headers: { "Content-Type": "application/json" },
});
