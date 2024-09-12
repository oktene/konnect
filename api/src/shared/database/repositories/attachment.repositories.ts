import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AttachmentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDto: Prisma.AttachmentCreateArgs) {
    return await this.prismaService.attachment.create(createDto);
  }

  async findUnique(findUniqueDto: Prisma.AttachmentFindUniqueArgs) {
    return await this.prismaService.attachment.findUnique(findUniqueDto);
  }

  async findAll(findAll: Prisma.AttachmentFindManyArgs) {
    return await this.prismaService.attachment.findMany(findAll);
  }

  async update(updateDto: Prisma.AttachmentUpdateArgs) {
    return await this.prismaService.attachment.update(updateDto);
  }

  async remove(deleteDto: Prisma.AttachmentDeleteArgs) {
    return await this.prismaService.attachment.delete(deleteDto)
  }
}
