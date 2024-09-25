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
  ValidateNested,
} from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PermissionLevel } from 'src/shared/enums/permissionLevel.enum';
import { Role } from 'src/shared/enums/role.enum';
import { CreateCompanyDto } from 'src/modules/company/dto/create-company.dto';
import { Type } from 'class-transformer';

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

  @IsOptional() // Caso o usuário queira associar a um companyId existente
  @IsString({ message: 'O ID da empresa deve ser uma string.' })
  companyId?: string;

  @ValidateNested()
  @Type(() => CreateCompanyDto)
  @ApiProperty()
  company: CreateCompanyDto;
}
