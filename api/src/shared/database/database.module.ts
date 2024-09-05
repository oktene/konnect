import { Global, Module } from '@nestjs/common';
import { UserRepository } from './repositories/users.repositories';
import { CompanyRepository } from './repositories/company.repositories';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [UserRepository, CompanyRepository, PrismaService],
  exports: [UserRepository, CompanyRepository, PrismaService],
})
export class DatabaseModule {}
