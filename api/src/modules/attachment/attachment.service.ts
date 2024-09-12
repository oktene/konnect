import { ConflictException, Injectable, StreamableFile } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { AttachmentRepository } from '../../shared/database/repositories/attachment.repositories';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Attachment } from '@prisma/client';

@Injectable()
export class AttachmentService {
  constructor(private readonly attachmentRepo: AttachmentRepository) {}

  async getAll() {
    return await this.attachmentRepo.findAll({});
  }

  async getFilesByOpportunities(opportunityId: string) {
    return await this.attachmentRepo.findAll({
      where: { id: opportunityId },
      // select: { filePath: true },
    });
  }

  async update(id: string, updateAttachmentDto: UpdateAttachmentDto) {
    return await this.attachmentRepo.update({
      where: { id: id },
      data: updateAttachmentDto,
    });
  }

  async remove(id: string) {
    return await this.attachmentRepo.remove({ where: { id } });
  }
}
