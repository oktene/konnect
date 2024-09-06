import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

import { Company } from '@prisma/client';

@Injectable()
export class CompanyService {
  constructor() {}

  async create() {}
  /*  async getCompanyWithDetails(companyId: string): Promise<Company | null> {
    const company = this.prisma.company.findUnique({
      where: { id: companyId },
      include: {
        users: true,
        opportunities: true,
        proposals: true,
        addresses: true,
      },
    });

    console.log('Company with details:', company);

    return company;
  } */

  async getCompanyById() {}
}
