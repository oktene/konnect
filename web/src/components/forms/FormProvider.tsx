import { useForm, FormProvider as RHFormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { ZodSchema } from 'zod';

interface FormProviderProps {
  children: ReactNode;
  schema: ZodSchema<any>;
  defaultValues?: any;
  onSubmit: (data: any) => void;
}

export const FormProvider = ({ children, schema, defaultValues, onSubmit }: FormProviderProps) => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <RHFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </RHFormProvider>
  );
};