import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'prisma/prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthModule } from 'src/auth/auth.module';
import { CompanyService } from '../company/company.service';
import { CompanyModule } from '../company/company.module';

@Module({
  controllers: [UserController],
  providers: [UserService, CompanyService, PrismaService],
  exports: [UserService],
  imports: [CompanyModule]
})
export class UserModule {}
