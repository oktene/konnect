import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDto: Prisma.CategoryCreateArgs) {
    return await this.prismaService.category.create(createDto);
  }

  async findUnique(findUniqueDto: Prisma.CategoryFindUniqueArgs) {
    return await this.prismaService.category.findUnique(findUniqueDto);
  }

  async findAll(findAll: Prisma.CategoryFindManyArgs) {
    return await this.prismaService.category.findMany(findAll);
  }

  async update(updateDto: Prisma.CategoryUpdateArgs) {
    return await this.prismaService.category.update(updateDto);
  }

  async remove(deleteDto: Prisma.CategoryDeleteArgs) {
    return await this.prismaService.category.delete(deleteDto)
  }
}
