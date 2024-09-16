import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || 'https://cuddly-space-memory-7vrx55w9vv9vcr4ww-3000.app.github.dev/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
    (config) => {
        // Adicione um token de autenticação se estiver disponível
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Manipule erros de forma global
        if (error.response && error.response.status === 401) {
            // Redirecione para a página de login ou trate o erro de autenticação
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;