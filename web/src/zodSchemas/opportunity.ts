import { z } from "zod";

export const OpportunitySchema = z.object({
   id: z.string(),
   codeRFQ: z.string(),
   description: z.string(),
   quantity: z.number().optional(),
   unityMetric: z.string().optional(),
   executionPeriod: z.date().optional(),
   deadlineSubmission: z.date(),
   typeOpportunity: z.enum(["Service", "Product"]),
   isExpired: z.boolean().default(false),
   attachments: z.array(
      z.object({ id: z.string(), filename: z.string(), url: z.string().url() })
   ),
   proposals: z.array(
      z.object({
         id: z.string(),
         amount: z.number(),
         status: z.enum(["Pending", "Accepted", "Rejected"]),
      })
   ),
   companyId: z.string(),
   subCategoryId: z.string(),
});

export type Opportunity = z.infer<typeof OpportunitySchema>;
