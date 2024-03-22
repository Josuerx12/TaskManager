import axios from "axios";

export const api = axios.create({
  baseURL: "https://backendtaskmanager.vercel.app/",
  headers: { "Content-Type": "application/json" },
});
