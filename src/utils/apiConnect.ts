import axios from "axios";

export const api = axios.create({
  baseURL: "https://apitaskm.josuecarvalho.cloud/",
  headers: { "Content-Type": "application/json" },
});
