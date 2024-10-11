"use client";
import { createContext, useCallback, useEffect, useState } from "react";
import { authService } from "@/services/auth/authService";
import { userService } from "@/services/user/userService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { hasPermission as checkPermission } from "@/utils/permissions";

export type TemporaryUserType = {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  permissionLevel: string;
  company: {
    id: string;
    name: string;
    companyRegistration: string;
  };
};

interface AuthContextValue {
  signedIn: boolean;
  user: TemporaryUserType | undefined;
  signin(accessToken: string): void;
  signout(): void;
  isLoading: boolean;
  hasPermission(permissionLevel: string): boolean;
}

export const AuthContext = createContext({} as AuthContextValue);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const router = useRouter();

  const redirectUser = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router]
  );

  useEffect(() => {
    if (authService.isAuthenticated()) {
      setSignedIn(true);
    } else {
      redirectUser("/sign-in");
    }
  }, [redirectUser]);

  const signin = useCallback(
    (accessToken: string) => {
      authService.setToken(accessToken);
      setSignedIn(true);
      redirectUser("/oportunidades-publicas");
    },
    [redirectUser]
  );

  const signout = useCallback(() => {
    authService.clearToken();
    setSignedIn(false);
    queryClient.invalidateQueries({ queryKey: ["me"] });
    redirectUser("/sign-in");
  }, [queryClient, redirectUser]);

  const { data, isError, isFetching, isSuccess, isLoading } = useQuery({
   queryKey: ["me"],
   queryFn: userService.fetchMe,
   enabled: signedIn,
   staleTime: Infinity,
 });

 // Tratamento de erro pode ser feito após a consulta
 useEffect(() => {
   if (isError) {
     signout();
   }
 }, [isError, signout]);

 const hasPermission = useCallback(
   (requiredPermission: string): boolean => {
     return checkPermission(data, requiredPermission);
   },
   [data]
 );

 // Gerenciar redirecionamento com base no status do usuário
 useEffect(() => {
   if (!isLoading && signedIn) {
     redirectUser("/oportunidades-publicas");
   } else if (!signedIn && !isLoading) {
     redirectUser("/sign-in");
   }
 }, [signedIn, isLoading, redirectUser]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        signin,
        signout,
        user: data,
        isLoading: isLoading || isFetching,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
