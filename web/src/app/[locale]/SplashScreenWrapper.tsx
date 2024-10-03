'use client';

import { useEffect, useState } from 'react';
import SplashScreen from './page';
import { useRouter } from 'next/navigation';


export default function SplashScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false); // Verifica se o componente foi montado
  const router = useRouter();

  // Verifica se o componente foi montado no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Executa o redirecionamento apenas após a montagem
  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        setLoading(false);
        // if (typeof window !== 'undefined') {
        //   // Garante que o router.push só seja chamado no lado do cliente
        //   router.push('/sign-in', undefined, { locale: router.locale });
        // }
      }, 3000); // 3 segundos de splash

      return () => clearTimeout(timer); // Limpa o timer quando o componente desmonta
    }
  }, [isMounted, router]);

  // Renderiza a splash screen enquanto está carregando
  return <>{isLoading ? <SplashScreen /> : children}</>;
}