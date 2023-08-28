import axios from "axios";

// baseURL: "https://backendtaskmanager.vercel.app/"

export const api = axios.create({
  baseURL: "https://backendtaskmanager.vercel.app/",
  headers: { "Content-Type": "application/json" },
});
