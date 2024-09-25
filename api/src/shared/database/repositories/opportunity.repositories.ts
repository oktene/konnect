import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OpportunityRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDto: Prisma.OpportunityCreateArgs) {
    return await this.prismaService.opportunity.create(createDto);
  }

  async findUnique(findUniqueDto: Prisma.OpportunityFindUniqueArgs) {
    return await this.prismaService.opportunity.findUnique(findUniqueDto);
  }

  async findAll(findAll: Prisma.OpportunityFindManyArgs) {
    return await this.prismaService.opportunity.findMany(findAll);
  }

  async update(updateDto: Prisma.OpportunityUpdateArgs) {
    return await this.prismaService.opportunity.update(updateDto);
  }

  async remove(deleteDto: Prisma.OpportunityDeleteArgs) {
    return await this.prismaService.opportunity.delete(deleteDto);
  }
}
