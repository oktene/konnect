import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional()
  companyRegistration?: string;

  @IsBoolean()
  @ApiProperty()
  isInternational: boolean = false;

  @IsString()
  @IsOptional()
  @ApiProperty()
  about: string;
}
