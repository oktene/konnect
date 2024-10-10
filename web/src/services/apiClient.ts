import axios from "axios";

// Crie uma instância do Axios com a URL base da API
export const apiClient = axios.create({
  baseURL: process.env.NEXTAUTH_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});