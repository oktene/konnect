import axios from "axios";

// Crie uma instância do Axios com a URL base da API
export const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptores para manipular requisições e respostas
/* apiClient.interceptors.request.use(
  (config) => {
    // Adicione tokens de autenticação ou outros headers customizados aqui
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
); */

// Interceptor para lidar com respostas de erro
/* apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Aqui você pode manipular erros globais, como expiração de token
    if (error.response?.status === 401) {
      // Por exemplo, redirecionar para a página de login se não autenticado
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
); */
