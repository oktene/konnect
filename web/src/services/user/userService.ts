import { TemporaryUserType } from "@/app/contexts/AuthContext";
import { apiClient } from "../apiClient";

export const userService = {
  // Buscar todas as empresas
  async me(): Promise<TemporaryUserType> {
    const { data } = await apiClient.get("/user/me");
    return data;
  },
};
