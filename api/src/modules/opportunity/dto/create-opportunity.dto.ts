import { TypeOpportunity } from "../../../shared/enums/typeOpportunity.enum";

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
