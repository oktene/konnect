import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SubcategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDto: Prisma.SubCategoryCreateArgs) {
    return await this.prismaService.subCategory.create(createDto);
  }

  async findUnique(findUniqueDto: Prisma.SubCategoryFindUniqueArgs) {
    return await this.prismaService.subCategory.findUnique(findUniqueDto);
  }

  async findFirst(findFirstDto: Prisma.SubCategoryFindFirstArgs) {
    return await this.prismaService.subCategory.findFirst(findFirstDto);
  }

  async findAll(findAll: Prisma.SubCategoryFindManyArgs) {
    return await this.prismaService.subCategory.findMany(findAll);
  }

  async update(updateDto: Prisma.SubCategoryUpdateArgs) {
    return await this.prismaService.subCategory.update(updateDto);
  }

  async delete(deleteDto: Prisma.SubCategoryDeleteArgs) {
    return await this.prismaService.subCategory.delete(deleteDto)
  }
}
