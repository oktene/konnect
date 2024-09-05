import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { PermissionLevel } from '../entities/PermissionLevel';
import { Role } from '../entities/Role';

export class SignupDto {
  @IsString({ message: 'O nome precisa ser uma String!' })
  @IsNotEmpty({ message: 'O nome é obrigatório!' })
  name: string;

  @IsString({ message: 'O Email precisa ser uma String!' })
  @IsNotEmpty({ message: 'O Email é obrigatório!' })
  @IsEmail()
  email: string;

  //Alterar mensagens de erro
  @IsString({ message: 'O companyId precisa ser uma String!' })
  @IsNotEmpty({ message: 'O companyId é obrigatório!' })
  @IsUUID()
  companyId: string;

  @IsString()
  @IsNotEmpty()
  //Alterar para o mínimo do Konnect
  @MinLength(3)
  password: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsOptional()
  cpf: string;

  @IsNotEmpty()
  @IsEnum(PermissionLevel)
  permissionLevel: PermissionLevel;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}
