import { z } from 'zod';

export const AttachmentSchema = z.object({
  id: z.string().uuid(),
  filePath: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  opportunityId: z.string().uuid(),
  proposalId: z.string().uuid(),
});

export type Attachment = z.infer<typeof AttachmentSchema>;