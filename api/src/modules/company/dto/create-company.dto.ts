import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  companyRegistration?: string;

  @IsBoolean()
  isInternational: boolean = false;

  @IsString()
  @IsOptional()
  about: string;
}
