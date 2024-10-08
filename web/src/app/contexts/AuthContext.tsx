"use client";
import { userService } from "@/services/user/userService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useEffect, useState } from "react";

export type TemporaryUserType = {
  id: string;
  email: string;
  name: string;
};

interface AuthContextValue {
  signedIn: boolean;
  user: TemporaryUserType | undefined;
  signin(accessToken: string): void;
  signout(): void;
  isLoading: boolean;
}

export const AuthContext = createContext({} as AuthContextValue);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAccessToken = localStorage.getItem("konnect:accessToken");
      setSignedIn(!!storedAccessToken);
    }
  }, []);

  const queryClient = useQueryClient();

  const signin = useCallback((accessToken: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("konnect:accessToken", accessToken);
      setSignedIn(true);
    }

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("konnect:accessToken");
      setSignedIn(false);
      queryClient.invalidateQueries({ queryKey: ["me"] });
    }
    queryClient.invalidateQueries({ queryKey: ["me"] });
  }, []);

  if (!signedIn) {
    router.push("/sign-in"); // Redireciona para a página de login se o token não existir
  } else {
    router.push("/dashboard"); // Redireciona para o dashboard se o token existir
  }

  const { data, isError, error, isFetching, isSuccess, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: () => userService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        signin,
        signout,
        user: data,
        isLoading: isLoading || isFetching,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
