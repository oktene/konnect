import { z } from 'zod';
import { CompanySchema } from './company';
import { AttachmentSchema } from './attachment';

export const ProposalSchema = z.object({
  id: z.string().uuid(),
  appliedAt: z.date(),
  updatedAt: z.date(),
  companyApplicatorId: z.string().uuid(),
  opportunityId: z.string().uuid(),
  description: z.string(),
  attachments: z.array(AttachmentSchema),
  appliedBy: CompanySchema,
});

export type Proposal = z.infer<typeof ProposalSchema>;