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

  async findByEmail(userEmail: string) {
    return this.prismaService.user.findUnique({ where: { email: userEmail } });
  }

  async updateRecoveryToken(userEmail: string, recoveryToken: string, expires: Date) {
    const updateDto: Prisma.UserUpdateArgs = {
      where: { email: userEmail },
      data: {
        recoveryToken,
        recoveryTokenExpires: expires,
      },
    };
    return await this.prismaService.user.update(updateDto);
  }

  async findByRecoveryToken(token: string) {
    const findDto: Prisma.UserFindFirstArgs = {
      where: {
        recoveryToken: token,
        recoveryTokenExpires: { gt: new Date() },
      },
    };
    return this.prismaService.user.findFirst(findDto);
  }

  async updatePassword(userId: string, password: string) {
    const updateDto: Prisma.UserUpdateArgs = {
      where: { id: userId },
      data: {
        password,
        recoveryToken: null,
        recoveryTokenExpires: null,
      },
    };
    return await this.prismaService.user.update(updateDto);
  }
}