import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';
import { OpportunityRepository } from 'src/shared/database/repositories/opportunity.repositories';
import { CompanyRepository } from 'src/shared/database/repositories/company.repositories';
import { Opportunity } from '@prisma/client';

@Injectable()
export class OpportunityService {
  constructor(
    private readonly opportunitiesRepo: OpportunityRepository,
    private readonly companiesRepo: CompanyRepository
  ) {}

  async create(createOpportunityDto: CreateOpportunityDto) {
    const companyExists = await this.companiesRepo.findUnique({
      where: {
        id: createOpportunityDto.companyId
      },
    });

    if (!companyExists) {
      throw new NotFoundException('Empresa inexistente.');
    }

    return await this.opportunitiesRepo.create({
      data: {
        codeRFQ: createOpportunityDto.codeRFQ,
        description: createOpportunityDto.description,
        quantity: createOpportunityDto.quantity,
        unityMetric: createOpportunityDto.unityMetric,
        executionPeriod: createOpportunityDto.executionPeriod,
        deadlineSubmission: createOpportunityDto.deadlineSubmission,
        typeOpportunity: createOpportunityDto.typeOpportunity,
        isExpired: createOpportunityDto.isExpired,
        companyId: createOpportunityDto.companyId,
        subCategoryId: createOpportunityDto.subCategoryId,
      }
    });
  }

  getAll() {
    return this.opportunitiesRepo.findAll;
  }

  async getOneById(opportunityId: string) {
    return await this.opportunitiesRepo.findUnique({
      where: { id: opportunityId }
    })
  }

  async update(opportunityId: string, updateOpportunityDto: UpdateOpportunityDto) {
    return await this.opportunitiesRepo.update({
      where: { id: opportunityId },
      data: {
        codeRFQ: updateOpportunityDto.codeRFQ,
        description: updateOpportunityDto.description,
        quantity: updateOpportunityDto.quantity,
        unityMetric: updateOpportunityDto.unityMetric,
        executionPeriod: updateOpportunityDto.executionPeriod,
        deadlineSubmission: updateOpportunityDto.deadlineSubmission,
        typeOpportunity: updateOpportunityDto.typeOpportunity,
        isExpired: updateOpportunityDto.isExpired,
        companyId: updateOpportunityDto.companyId,
        subCategoryId: updateOpportunityDto.subCategoryId,
      }
    });
  }

  async delete(opportunityId: string) {
    return await this.opportunitiesRepo.remove({
      where: { id: opportunityId }
    })
  }
}
