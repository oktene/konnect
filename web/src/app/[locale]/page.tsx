"use client";

import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";

export default function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex items-center justify-center h-screen bg-black transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner className="text-white w-32 h-32 animate-spin" />
        </div>
        <Image className="w-32 h-32 relative" src="/logo.png" alt="logo"/>
        <p className="text-white text-lg mt-4 animate-pulse">Carregando...</p>
      </div>
    </div>
  );
}
