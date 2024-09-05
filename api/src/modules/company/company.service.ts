import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Company } from '@prisma/client';


@Injectable()
export class CompanyService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}
  
  create(data: CreateCompanyDto) {
    return this.prisma.company.create({
      data
    });
  }

  getAll() {
    return this.prisma.company.findMany();
  }

  getById(id: string) {
    return this.prisma.company.findUnique({
      where: { id },
    });
  }

  async getCompanyWithDetails(companyId: string): Promise<Company | null> {
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
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
