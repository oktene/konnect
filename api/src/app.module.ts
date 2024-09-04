import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { CompanyModule } from './modules/company/company.module';
import { ProposalModule } from './modules/proposal/proposal.module';
import { OpportunityModule } from './modules/opportunity/opportunity.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, CompanyModule, ProposalModule, OpportunityModule, AuthModule, PrismaModule],
})
export class AppModule {}