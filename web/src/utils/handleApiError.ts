import { AxiosError } from 'axios';

// Definir a estrutura de resposta esperada
interface ApiErrorResponse {
  message: string;
}

export const handleApiError = (error: AxiosError<ApiErrorResponse>): string => {
  if (error.response && error.response.data) {
    // Verificar se 'message' existe em 'data'
    return error.response.data.message || 'Erro desconhecido da API';
  } else if (error.request) {
    // Erro de requisição (sem resposta)
    return 'Não foi possível se conectar à API. Verifique sua conexão.';
  } else {
    // Outro erro durante a configuração da requisição
    return 'Erro inesperado ao configurar a requisição.';
  }
};