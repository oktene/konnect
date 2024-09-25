import { z } from 'zod';
import { CountrySchema } from './enums';

export const AddressSchema = z.object({
  id: z.string().uuid(),
  street: z.string(),
  number: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: CountrySchema,
  neighborhood: z.string(),
  isMatriz: z.boolean(),
  companyId: z.string().uuid(),
});

export type Address = z.infer<typeof AddressSchema>;