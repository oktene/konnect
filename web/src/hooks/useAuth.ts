import { useMutation } from 'react-query';
import axiosInstance from '@/config/axiosConfig';
import { useRouter } from 'next/router';

interface LoginData {
  email: string;
  password: string;
}

export function useAuth() {
  const router = useRouter();

  // Mutation para realizar o login
  const loginMutation = useMutation(
    async (data: LoginData) => {
      const response = await axiosInstance.post('/auth/login', data);
      console.log(response)
      return response.data;
    },
    {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
        router.push('/oportunidades-publicas');
      },
      onError: (error) => {
        console.error('Erro ao fazer login', error);
        // Lógica de erro (exibir mensagem para o usuário)
      },
    }
  );

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/sign-in');
  };

  return {
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.isLoading,
    logout,
  };
}
