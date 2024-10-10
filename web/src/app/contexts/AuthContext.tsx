"use client";
import { authService, SignUpParams } from "@/services/auth/authService";
import { userService } from "@/services/user/userService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useEffect, useState } from "react";

export type TemporaryUserType = {
   id: string;
   email: string;
   name: string;
   permissionLevel: string;
};

interface AuthContextValue {
   signedIn: boolean;
   user: TemporaryUserType | undefined;
   signin(accessToken: string): void;
   signout(): void;
  //  signup(accessToken: string): void;
   isLoading: boolean;
   hasPermission(permissionLevel: string): boolean;
}

export const AuthContext = createContext({} as AuthContextValue);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<TemporaryUserType | undefined>(undefined);
  const queryClient = useQueryClient();
  const router = useRouter();

   // useEffect(() => {
   //   if (typeof window !== "undefined") {
   //     const storedAccessToken = localStorage.getItem("accessToken");
   //     setSignedIn(!!storedAccessToken);
   //   }
   // }, []);

   useEffect(() => {
      const storedAccessToken = localStorage.getItem("accessToken");
      if (storedAccessToken) {
         setSignedIn(true);
      } else {
         router.push("/sign-in");
      }
   }, []);

   const signin = useCallback((accessToken: string) => {
      if (typeof window !== "undefined") {
         localStorage.setItem("accessToken", accessToken);
         setSignedIn(true);
      }

      setSignedIn(true);
   }, []);

   const signup = useCallback((accessToken: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", accessToken);
      setSignedIn(true);
    }
    setSignedIn(true);
    router.push("/oportunidades-publicas"); // Redireciona para oportunidades públicas após o cadastro
  }, [router]);

   const signout = useCallback(() => {
      if (typeof window !== "undefined") {
         localStorage.removeItem("accessToken");
         setSignedIn(false);
         queryClient.invalidateQueries({ queryKey: ["me"] });
      }
      queryClient.invalidateQueries({ queryKey: ["me"] });
   }, []);

   if (!signedIn) {
      router.push("/sign-in");
   } else {
      router.push("/oportunidades-publicas");
   }

   const hasPermission = (requiredPermission: string): boolean => {
      if (!data || !data.permissionLevel) return false;
      return data.permissionLevel === requiredPermission;
   };

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
            // signup,
            user: data,
            isLoading: isLoading || isFetching,
            hasPermission,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};
