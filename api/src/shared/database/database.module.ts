import { Global, Module } from '@nestjs/common';
import { UserRepository } from './repositories/users.repositories';
import { OpportunityRepository } from './repositories/opportunity.repositories';
import { CompanyRepository } from './repositories/company.repositories';
import { PrismaService } from './prisma.service';
import { CategoryRepository } from './repositories/category.repositories';
import { SubcategoryRepository } from './repositories/subcategory.repositories';
import { AddressModule } from 'src/modules/address/address.module';
import { ProposalModule } from 'src/modules/proposal/proposal.module';

@Global()
@Module({
  providers: [UserRepository, CompanyRepository, CategoryRepository, SubcategoryRepository, OpportunityRepository, AddressModule, ProposalModule, PrismaService],
  exports: [UserRepository, CompanyRepository, CategoryRepository, SubcategoryRepository, OpportunityRepository, AddressModule, ProposalModule, PrismaService],
})
export class DatabaseModule {}
