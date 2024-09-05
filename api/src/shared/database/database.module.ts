import { Global, Module } from '@nestjs/common';
import { UserRepository } from './repositories/users.repositories';
import { CompanyRepository } from './repositories/company.repositories';

@Global()
@Module({
  providers: [UserRepository, CompanyRepository],
  exports: [UserRepository, CompanyRepository],
})
export class DatabaseModule {}
