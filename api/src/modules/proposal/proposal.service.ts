import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal.dto';
import { ProposalRepository } from 'src/shared/database/repositories/proposal.repositories';
import { OpportunityRepository } from 'src/shared/database/repositories/opportunity.repositories';
import { CompanyRepository } from 'src/shared/database/repositories/company.repositories';

@Injectable()
export class ProposalService {
  constructor(
    private readonly proposalsRepo: ProposalRepository,
    private readonly opportunitiesRepo: OpportunityRepository,
    private readonly companiesRepo: CompanyRepository
  ) {}

  async create(createProposalDto: CreateProposalDto) {
    const { companyApplicatorId, opportunityId } = createProposalDto  
    
    await this.verifyIfExists(companyApplicatorId, opportunityId);
    if(this.verifyIfExists) return await this.proposalsRepo.create({ data: createProposalDto })
  }

  findAll() {
    return this.proposalsRepo.findAll({});
  }

  findOne(proposalId: string) {
    return this.proposalsRepo.findUnique({
      where: {
        id: proposalId
      },
      include: { opportunity: true, appliedBy: true, attachments: true }
    });
  }

  async getAllByCompanyId(companyId: string) {
    return await this.proposalsRepo.findAll({
      where: { companyApplicatorId: companyId },
      include: {
        opportunity: true,
        attachments: true,
      },
    });
  }

  update(proposalId: string, updateProposalDto: UpdateProposalDto) {
    return this.proposalsRepo.update({
      where: { id: proposalId },
      data: updateProposalDto
    });
  }

  remove(proposalId: string) {
    return this.proposalsRepo.remove({
      where: {
        id: proposalId
      }
    });
  }

  private async verifyIfExists(companyId: string, subcategoryId: string) {
    await Promise.all([
      this.checkExists(this.companiesRepo, companyId, 'Empresa inexistente.'),
      this.checkExists(this.opportunitiesRepo, subcategoryId, 'Subcategoria inexistente.')
    ]);
  }
  
  private async checkExists(repo: CompanyRepository | OpportunityRepository, id: string, errorMessage: string) {
    const record = await repo.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(errorMessage);
    }
  }
}
