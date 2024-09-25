import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { CompanyService } from '../company/company.service';
import { CompanyModule } from '../company/company.module';

@Module({
  controllers: [UserController],
  providers: [UserService, CompanyService],
  exports: [UserService],
  imports: [CompanyModule],
})
export class UserModule {}
