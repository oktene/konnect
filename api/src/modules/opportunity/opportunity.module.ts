import { Module } from '@nestjs/common';
import { OpportunityService } from './opportunity.service';
import { OpportunityController } from './opportunity.controller';

@Module({
  controllers: [OpportunityController],
  providers: [OpportunityService],
})
export class OpportunityModule {}
