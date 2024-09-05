import { Injectable, StreamableFile } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { PrismaService } from 'prisma/prisma.service';
import { Attachment } from '@prisma/client';

@Injectable()
export class AttachmentService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}
  
  create(createAttachmentDto: CreateAttachmentDto) {
    return 'This action adds a new attachment';
  }

  async getFilesByOpportunities(opportunityId: string): Promise<Attachment|null> {
    // return await this.prisma.attachment.findMany({
    //   where: { opportunityId }
    // })

    return null
  }

  update(id: string, updateAttachmentDto: UpdateAttachmentDto) {
    return `This action updates a #${id} attachment`;
  }

  remove(id: string) {
    return `This action removes a #${id} attachment`;
  }
}
