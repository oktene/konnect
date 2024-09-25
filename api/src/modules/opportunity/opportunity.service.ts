import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';
import { OpportunityRepository } from 'src/shared/database/repositories/opportunity.repositories';
import { CompanyRepository } from 'src/shared/database/repositories/company.repositories';
import { SubcategoryRepository } from 'src/shared/database/repositories/subcategory.repositories';

@Injectable()
export class OpportunityService {
  constructor(
    private readonly opportunitiesRepo: OpportunityRepository,
    private readonly companiesRepo: CompanyRepository,
    private readonly subcategoriesRepo: SubcategoryRepository
  ) {}

  async create(createOpportunityDto: CreateOpportunityDto) {
    const { companyId, subCategoryId } = createOpportunityDto;
    
    await this.verifyIfExists(companyId, subCategoryId);
    const opportunityData = this.buildOpportunityData(createOpportunityDto);
    return await this.opportunitiesRepo.create({ data: opportunityData });
  }

  getAll() {
    return this.opportunitiesRepo.findAll({});
  }

  async getOneById(opportunityId: string) {
    return await this.opportunitiesRepo.findUnique({
      where: { id: opportunityId }
    })
  }

  async update(opportunityId: string, updateOpportunityDto: UpdateOpportunityDto) {
    const opportunityData = this.buildOpportunityData(updateOpportunityDto);

    return await this.opportunitiesRepo.update({
      where: { id: opportunityId },
      data: opportunityData
    });
  }

  async delete(opportunityId: string) {
    return await this.opportunitiesRepo.remove({
      where: { id: opportunityId }
    })
  }

  private async verifyIfExists(companyId: string, subcategoryId: string) {
    await Promise.all([
      this.checkExists(this.companiesRepo, companyId, 'Empresa inexistente.'),
      this.checkExists(this.subcategoriesRepo, subcategoryId, 'Subcategoria inexistente.')
    ]);
  }
  
  private async checkExists(repo: CompanyRepository | SubcategoryRepository, id: string, errorMessage: string) {
    const record = await repo.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(errorMessage);
    }
  }
  
  private buildOpportunityData(opportunityDto: CreateOpportunityDto | UpdateOpportunityDto) {
    return {
      codeRFQ: opportunityDto.codeRFQ,
      description: opportunityDto.description,
      quantity: opportunityDto.quantity,
      unityMetric: opportunityDto.unityMetric,
      executionPeriod: opportunityDto.executionPeriod,
      deadlineSubmission: opportunityDto.deadlineSubmission,
      typeOpportunity: opportunityDto.typeOpportunity,
      isExpired: opportunityDto.isExpired,
      companyId: opportunityDto.companyId,
      subCategoryId: opportunityDto.subCategoryId,
    };
  }
}
