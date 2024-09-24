import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ZodSchema } from 'zod';

export const useFormSchema = (schema: ZodSchema<any>, defaultValues?: any) => {
  return useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });
};