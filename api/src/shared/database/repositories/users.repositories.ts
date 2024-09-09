import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDto: Prisma.UserCreateArgs) {
    return await this.prismaService.user.create(createDto);
  }
  
  async findAll(findAll: Prisma.UserFindManyArgs) {
    return await this.prismaService.user.findMany(findAll);
  }

  async findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
    return await this.prismaService.user.findUnique(findUniqueDto);
  }

  async update(updateDto: Prisma.UserUpdateArgs) {
    return await this.prismaService.user.update(updateDto);
  }

  async delete(deleteDto: Prisma.UserDeleteArgs) {
    return await this.prismaService.user.delete(deleteDto);
  }
}
