import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PermissionLevel } from '../entities/PermissionLevel';
import { Role } from '../entities/Role';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SignupDto {
  @IsString({ message: 'O nome precisa ser uma String!' })
  @IsNotEmpty({ message: 'O nome é obrigatório!' })
  @ApiProperty()
  name: string;

  @IsString({ message: 'O Email precisa ser uma String!' })
  @IsNotEmpty({ message: 'O Email é obrigatório!' })
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{10,15}$/)
  @ApiProperty()
  phone: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  cpf: string;

  //Alterar mensagens de erro
  @IsString({ message: 'O companyId precisa ser uma String!' })
  @IsNotEmpty({ message: 'O companyId é obrigatório!' })
  @IsUUID()
  @ApiProperty()
  companyId: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @IsEnum(PermissionLevel)
  @ApiProperty({ enum: PermissionLevel })
  permissionLevel: PermissionLevel;

  @IsNotEmpty()
  @IsEnum(Role)
  @ApiProperty({ enum: Role })
  role: Role;
}
