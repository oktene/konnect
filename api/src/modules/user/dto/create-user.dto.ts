import { PermissionLevel } from "../entities/enums/permissionLevel.entity";
import { Role } from "../entities/enums/role.entity";

export class CreateUserDto {
    email: string;
    name: string;
    phone: string;
    cpf?: string;
    permissionLevel: PermissionLevel;
    role: Role;
    companyId: string;
}
