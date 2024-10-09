import axios from "axios";

// Crie uma instância do Axios com a URL base da API
export const apiClient = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});