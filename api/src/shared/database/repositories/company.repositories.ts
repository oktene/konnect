import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CompanyRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDto: Prisma.CompanyCreateArgs) {
    return await this.prismaService.company.create(createDto);
  }

  async findUnique(findUniqueDto: Prisma.CompanyFindUniqueArgs) {
    return await this.prismaService.company.findUnique(findUniqueDto);
  }

  async findAll(findAll: Prisma.CompanyFindManyArgs) {
    return await this.prismaService.company.findMany(findAll);
  }

  async findMany(findMany: Prisma.CompanyFindManyArgs) {
    return await this.prismaService.company.findMany(findMany);
  }

  async update(updateDto: Prisma.CompanyUpdateArgs) {
    return await this.prismaService.company.update(updateDto);
  }

  async delete(deleteDto: Prisma.CompanyDeleteArgs) {
    return await this.prismaService.company.delete(deleteDto)
  }
}
