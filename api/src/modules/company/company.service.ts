import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyRepository } from 'src/shared/database/repositories/company.repositories';

@Injectable()
export class CompanyService {
  constructor(private readonly companiesRepo: CompanyRepository) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const { companyRegistration } = createCompanyDto;

    const companyRegistrationExists = await this.companiesRepo.findUnique({
      where: {
        companyRegistration: companyRegistration,
      },
    });

    if (companyRegistrationExists) {
      throw new ConflictException('Empresa já cadastrada.');
    }

    return await this.companiesRepo.create({ data: createCompanyDto });
  }

  async findAll() {
    return await this.companiesRepo.findAll({});
  }

  async findUnique(companyId: string) {
    return await this.companiesRepo.findUnique({ where: { id: companyId } });
  }

  async delete(companyId: string) {
    await this.companiesRepo.delete({ where: { id: companyId } });
  }
}
