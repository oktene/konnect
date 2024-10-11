import { apiClient } from "../apiClient";

export enum roleType {
  FORNECEDOR = "FORNECEDOR",
  COMPRADOR = "COMPRADOR",
  AMBOS = "AMBOS",
}

export enum PermissionLevel {
  ADMIN = "ADMIN",
  USER = "USER",
  EDITOR = "EDITOR",
}

export interface SigninParams {
  email: string;
  password: string;
}

export interface SignUpParams {
  email: string;
  password: string;
  name: string;
  phone: string;
  role: roleType;
  permissionLevel: PermissionLevel;
  company: {
    name: string;
    companyRegistration: string;
  };
}

interface SigninResponse {
  accessToken: string;
}

export const authService = {
  getToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("accessToken");
    }
    return null;
  },
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", token);
    }
  },
  clearToken: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
    }
  },
  isAuthenticated: () => {
    return !!authService.getToken();
  },

  async signIn(params: SigninParams) {
    const { data } = await apiClient.post<SigninResponse>("/sign-in", params);
    return data;
  },

  async signUp(params: SignUpParams) {
    const { data } = await apiClient.post<SigninResponse>("/sign-up", params);
    return data;
  },
};
