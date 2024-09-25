import { ConflictException, Injectable, StreamableFile } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { AttachmentRepository } from '../../shared/database/repositories/attachment.repositories';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Attachment } from '@prisma/client';
import { OpportunityRepository } from 'src/shared/database/repositories/opportunity.repositories';
import { ProposalRepository } from 'src/shared/database/repositories/proposal.repositories';

@Injectable()
export class AttachmentService {
  constructor(private readonly attachmentRepo: AttachmentRepository, 
    // private readonly opportunityRepo: OpportunityRepository,
    // private readonly proposalRepo: ProposalRepository,
  ) {}

  async getAll() {
    return await this.attachmentRepo.findAll({});
  }

  async getFilesByOpportunities(opportunityId: string) {
    return await this.attachmentRepo.findAll({
      where: { opportunityId: opportunityId },
      // select: {id: true, filePath: true },  
      include: { opportunity: true },
    });
  }

  async getFilesByProposal(proposalId: string) {
    return await this.attachmentRepo.findAll({
      where: { proposalId: proposalId },
      select: {id: true, filePath: true },  
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
