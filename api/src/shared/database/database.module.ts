import { Global, Module } from '@nestjs/common';
import { UserRepository } from './repositories/users.repositories';
import { OpportunityRepository } from './repositories/opportunity.repositories';
import { CompanyRepository } from './repositories/company.repositories';
import { PrismaService } from './prisma.service';
import { CategoryRepository } from './repositories/category.repositories';

@Global()
@Module({
  providers: [UserRepository, CompanyRepository, OpportunityRepository, PrismaService],
  exports: [UserRepository, CompanyRepository, OpportunityRepository, PrismaService],
})
export class DatabaseModule {}
