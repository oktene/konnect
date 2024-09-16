export const handleError = (error: any) => {
    if (error.response) {
        // Erros de resposta do servidor
        console.error('API Error:', error.response.data.message);
    } else if (error.request) {
        // Erro de requisição (sem resposta)
        console.error('Network Error:', error.request);
    } else {
        // Erro de configuração
        console.error('Error:', error.message);
    }
};