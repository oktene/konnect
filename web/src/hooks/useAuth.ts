import { AuthContext } from "@/app/contexts/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
  return useContext(AuthContext);
};
