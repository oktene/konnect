import { IsBoolean, IsString } from "class-validator";

export class CreateCompanyDto {
  @IsString()
  name: string;

  @IsString()
  companyRegistration?: string;

  @IsBoolean()
  isInternational?: boolean = false;

  @IsString()
  about?: string;
}
