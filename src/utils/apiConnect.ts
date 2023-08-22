import axios from "axios";

export const api = axios.create({
  baseURL: "https://task-manager-jc-c3601e5e0563.herokuapp.com/",
  headers: { "Content-Type": "application/json" },
});
