import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { CompanyModule } from './modules/company/company.module';
import { ProposalModule } from './modules/proposal/proposal.module';
import { OpportunityModule } from './modules/opportunity/opportunity.module';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/database/database.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UserModule,
    CompanyModule,
    ProposalModule,
    OpportunityModule,
    AuthModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
