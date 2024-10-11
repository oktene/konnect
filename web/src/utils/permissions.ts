import { TemporaryUserType } from "@/app/contexts/AuthContext";

export const hasPermission = (user: TemporaryUserType, requiredPermission: string): boolean => {
  if (!user || !user.permissionLevel) return false;
  return user.permissionLevel === requiredPermission;
};