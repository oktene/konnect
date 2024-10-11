import { TemporaryUserType } from "@/app/contexts/AuthContext";
import { apiClient } from "../apiClient";

export const userService = {
  fetchMe: async () => {
    const { data } = await apiClient.get("/user/me");
    return data;
  },
};
