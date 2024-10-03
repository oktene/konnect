import { z } from "zod";

export const OpportunitySchema = z.object({
   id: z.string(),
   codeRFQ: z.string(),
   description: z.string(),
   executionPeriod: z.date().optional(),
   deadlineSubmission: z.date(),
   typeOpportunity: z.enum(["Serviço", "Material"]),
   isExpired: z.boolean().default(false),
   attachments: z.array(
      z.object({ id: z.string(), filename: z.string(), url: z.string().url() })
   ).optional(),
   proposals: z.array(
      z.object({
         id: z.string(),
         amount: z.number(),
         status: z.enum(["Pending", "Accepted", "Rejected"]),
      })
   ).optional(),
   company: z.string().optional(),
   subCategory: z.string(),
});

export type Opportunity = z.infer<typeof OpportunitySchema>;
