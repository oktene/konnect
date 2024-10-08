"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./page";
import { useAuth } from "@/hooks/useAuth";

export default function SplashScreenWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuth();

  return <>{isLoading ? <SplashScreen /> : children}</>;
}
