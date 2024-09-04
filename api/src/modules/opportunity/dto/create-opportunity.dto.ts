import { TypeOpportunity } from "../entities/enums/typeOpportunity.entity";

export class CreateOpportunityDto {
  codeRFQ: string;
  description: string;
  quantity?: number;
  unitMetric?: string;
  executionPeriod?: Date;
  deadlineSubmission: Date;
  typeOpportunity: TypeOpportunity;
  companyId: string;
  subCategoryId: string;
}
