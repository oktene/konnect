import { ConflictException, Injectable, StreamableFile } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { AttachmentRepository} from '../../shared/database/repositories/attachment.repositories';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Attachment } from '@prisma/client';

@Injectable()
export class AttachmentService {
  constructor(private readonly attachmentRepo: AttachmentRepository) {}

  async create(createAttachmentDto: CreateAttachmentDto) {
    const { filePath, opportunityId, proposalId } = createAttachmentDto;

    const filePathExists = await this.attachmentRepo.findUnique({
      where: {
        id: filePath,
      },
    });

    if (filePathExists) {
      throw new ConflictException("Categoria já existe.");
    }

    return await this.attachmentRepo.create({
      data: { filePath, opportunityId, proposalId },
    });
  }

  async getFilesByOpportunities(
    opportunityId: string,
  ): Promise<Attachment | null> {
    // return await this.prisma.attachment.findMany({
    //   where: { opportunityId }
    // })

    return null;
  }

  update(id: string, updateAttachmentDto: UpdateAttachmentDto) {
    return `This action updates a #${id} attachment`;
  }

  remove(id: string) {
    return `This action removes a #${id} attachment`;
  }
}
