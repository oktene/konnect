"use client";

import SplashScreen from "./page";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function SplashScreenWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuth();
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
      }, 3000);

      return () => clearTimeout(timer); // Limpa o timer quando o componente desmonta
    }
  }, [isMounted, router]);

  // Renderiza a splash screen enquanto está carregando
  return <>{isLoading ? <SplashScreen /> : children}</>;
}