import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { PermissionLevel } from '../entities/enums/permissionLevel.entity';
import { Role } from '../entities/enums/role.entity';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{10,15}$/)
  phone: string;

  @IsString()
  @IsOptional()
  cpf?: string;

  @IsEnum(PermissionLevel)
  @IsNotEmpty()
  permissionLevel: 'USER' | 'ADMIN';

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  password: string;

  @IsEnum(Role)
  @IsNotEmpty()
  role: 'COMPRADOR' | 'FORNECEDOR' | 'AMBOS';

  @IsString()
  @IsNotEmpty()
  companyId: string;
}
