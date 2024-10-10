import { apiClient } from "../apiClient";

export interface SigninParams {
  email: string;
  password: string;
}

export interface SignUpParams {
  email: string;
  password: string;
  name: string;
  phone: string;
  permissionLevel: string
  company: {
    name: string;
    companyRegistration: string;
  };
}

interface SigninResponse {
  accessToken: string;
}

export const authService = {
  async signIn(params: SigninParams) {
    const { data } = await apiClient.post<SigninResponse>("/sign-in", params);
    return data;
  },

  async signUp(params: SignUpParams) {
    const { data } = await apiClient.post<SigninResponse>("/sign-up", params);
    return data;
  },
};

