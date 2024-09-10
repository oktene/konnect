import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CompanyModule } from './modules/company/company.module';
import { ProposalModule } from './modules/proposal/proposal.module';
import { OpportunityModule } from './modules/opportunity/opportunity.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { CategoryModule } from './modules/category/category.module';
import { SubcategoryModule } from './modules/subcategory/subcategory.module';
import { AttachmentModule } from './modules/attachment/attachment.module';
import { ResponseHandlerService } from './shared/handlers/responseHandler.service';
import { EmailModule } from './modules/email/email.module';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [
    AuthModule,
    UserModule,
    CompanyModule,
    ProposalModule,
    OpportunityModule,
    CategoryModule,
    SubcategoryModule,
    AttachmentModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    EmailModule,
  ],
})
export class AppModule {}
