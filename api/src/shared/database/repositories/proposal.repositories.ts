import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProposalRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDto: Prisma.ProposalCreateArgs) {
    return await this.prismaService.proposal.create(createDto);
  }

  async findUnique(findUniqueDto: Prisma.ProposalFindUniqueArgs) {
    return await this.prismaService.proposal.findUnique(findUniqueDto);
  }

  async findAll(findAll: Prisma.ProposalFindManyArgs) {
    return await this.prismaService.proposal.findMany(findAll);
  }

  async update(updateDto: Prisma.ProposalUpdateArgs) {
    return await this.prismaService.proposal.update(updateDto);
  }

  async remove(deleteDto: Prisma.ProposalDeleteArgs) {
    return await this.prismaService.proposal.delete(deleteDto);
  }
}
