import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyRepository } from 'src/shared/database/repositories/company.repositories';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { UUID } from 'crypto';

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

  async getOneById(companyId: string) {
    return await this.companiesRepo.findUnique({ where: { id: companyId } });
  }

  async getOneByCompanyRegistration(companyId: string) {
    return await this.companiesRepo.findUnique({ where: { companyRegistration: companyId } });
  }

  async findManyOpportunities(companyId: string) {
    return await this.companiesRepo.findMany({ 
      where: { id: companyId },
      select: { 
        opportunities : true
      }
    });
  }

  async update(companyId: UUID, updateCompanyDto: UpdateCompanyDto) {
    return await this.companiesRepo.update({ 
      where: { id: companyId },
      data: updateCompanyDto 
    });
  }

  async delete(companyId: string) {
    await this.companiesRepo.delete({ where: { id: companyId } });
  }
}
