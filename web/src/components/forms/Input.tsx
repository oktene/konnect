import { useFormContext } from 'react-hook-form';

interface InputProps {
  name: string;
  label: string;
  type?: string;
}

export const Input = ({ name, label, type = 'text' }: InputProps) => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register(name)} />
      {errors[name] && <p>{errors[name]?.message?.toString()}</p>}
    </div>
  );
};
