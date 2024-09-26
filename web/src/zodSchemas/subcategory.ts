import { z } from 'zod';
import { OpportunitySchema } from './opportunity';
import { CategorySchema } from './category';

export const SubCategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  categoryId: z.string().uuid(),
  opportunities: z.array(OpportunitySchema),
  category: CategorySchema,
});

export type SubCategory = z.infer<typeof SubCategorySchema>;