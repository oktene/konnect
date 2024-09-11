import { Module } from '@nestjs/common';
import { ProposalService } from './proposal.service';
import { ProposalController } from './proposal.controller';
import { CompanyModule } from '../company/company.module';
import { OpportunityModule } from '../opportunity/opportunity.module';
import { CompanyRepository } from 'src/shared/database/repositories/company.repositories';
import { OpportunityRepository } from 'src/shared/database/repositories/opportunity.repositories';
import { ProposalRepository } from 'src/shared/database/repositories/proposal.repositories';

@Module({
  controllers: [ProposalController],
  providers: [ProposalService, ProposalRepository, OpportunityRepository, CompanyRepository],
  imports: [CompanyModule, OpportunityModule],
})
export class ProposalModule {}
