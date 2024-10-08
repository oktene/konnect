import { TemporaryUserType } from "@/app/contexts/AuthContext";
import { apiClient } from "../apiClient";
import { Company } from "@/zodSchemas/company";
import { signIn } from "next-auth/react";

export interface SigninParams {
  email: string;
  password: string;
}

interface SigninResponse {
  accessToken: string;
}

export const authService = {
  // Buscar todas as empresas
  async signIn(params: SigninParams) {
    const { data } = await apiClient.post<SigninResponse>("/sign-in", params);
    return data;
  },
};
