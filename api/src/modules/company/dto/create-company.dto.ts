export class CreateCompanyDto {
  name: string;
  companyRegistration?: string;
  isInternational?: boolean = false;
  about?: string;
}
