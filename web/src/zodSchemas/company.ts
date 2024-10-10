import { z } from 'zod';
import { AddressSchema } from './address';

export const CompanySchema = z.object({
  name: z.string(),
  companyRegistration: z.string().optional(),
  about: z.string().optional(),
});

export type Company = z.infer<typeof CompanySchema>;