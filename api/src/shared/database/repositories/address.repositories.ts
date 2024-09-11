import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AddressRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDto: Prisma.AddressCreateArgs) {
    return await this.prismaService.address.create(createDto);
  }

  async findUnique(findUniqueDto: Prisma.AddressFindUniqueArgs) {
    return await this.prismaService.address.findUnique(findUniqueDto);
  }

  async findAll(findAll: Prisma.AddressFindManyArgs) {
    return await this.prismaService.address.findMany(findAll);
  }

  async update(updateDto: Prisma.AddressUpdateArgs) {
    return await this.prismaService.address.update(updateDto);
  }

  async remove(deleteDto: Prisma.AddressDeleteArgs) {
    return await this.prismaService.address.delete(deleteDto);
  }
}
