import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { PermissionLevel } from '../entities/enums/permissionLevel.entity';
import { Role } from '../entities/enums/role.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{10,15}$/)
  @ApiProperty()
  phone: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  cpf?: string;

  @IsEnum(PermissionLevel)
  @IsNotEmpty()
  @ApiProperty({ enum: ['USER', 'ADMIN']})
  permissionLevel: 'USER' | 'ADMIN';

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  @ApiProperty()
  password: string;

  @IsEnum(Role)
  @IsNotEmpty()
  @ApiProperty({ enum: ['COMPRADOR', 'FORNECEDOR', 'AMBOS']})
  role: 'COMPRADOR' | 'FORNECEDOR' | 'AMBOS';

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  companyId: string;
}
