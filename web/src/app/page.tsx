"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redireciona para a página de login após 3 segundos
      router.push("/sign-in");
    }, 2000);

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-orange-600">
      <div>
        <img src="public/logo.png" alt="" />
      </div>
      <h1 className="text-white text-4xl">Bem-vindo ao Konnect!</h1>
    </div>
  );
};

export default SplashScreen;
