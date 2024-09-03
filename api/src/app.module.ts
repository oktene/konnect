import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { CompanyModule } from './modules/company/company.module';
import { ProposalModule } from './modules/proposal/proposal.module';
import { OpportunityModule } from './modules/opportunity/opportunity.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AppService } from './app.service';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, CompanyModule, ProposalModule, OpportunityModule, PrismaModule],
})
export class AppModule {}