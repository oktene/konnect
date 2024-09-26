'use client';

import { useEffect, useState } from "react";
import SplashScreen from "./page";

export default function SplashScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <SplashScreen /> : children}</>;
}
