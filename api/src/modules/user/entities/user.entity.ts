import { PermissionLevel, Role } from "@prisma/client";

export class User {
    id: string;
    email: string;
    name: string;
    phone: string;
    cpf?: string;
    permissionLevel: PermissionLevel;
    password: string;
    role: Role;
    companyId: string;
}
