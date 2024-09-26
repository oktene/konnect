import { z } from 'zod';
import { AddressSchema } from './address';

export const CompanySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  companyRegistration: z.string().optional(),
  isInternational: z.boolean(),
  about: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  addresses: z.array(AddressSchema), // Relacionamento com Address
});

export type Company = z.infer<typeof CompanySchema>;