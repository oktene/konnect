"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AxiosError } from "axios";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import {
  authService,
  PermissionLevel,
  roleType,
  SignUpParams,
} from "@/services/auth/authService";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email("Informe um e-mail válido."),
  password: z.string().min(1, "A senha deve conter pelo menos 3 dígitos"),
  phone: z.string().regex(/^\d{10,15}$/),
  role: z.nativeEnum(roleType),
  company: z.object({
    name: z.string().min(1),
    companyRegistration: z.string().min(1),
  }),
});

type FormData = z.infer<typeof schema>;

//Importando do Auth Context

// const { isPending: isLoading, mutateAsync } = useMutation({
//    mutationKey: ["sign-up"],
//    mutationFn: async (data: SignUpParams) => {
//       return await authService.signUp(data);
//    },
// });

// const {
//    handleSubmit: hookFormHandleSubmit,
//    register,
//    formState: { errors },
// } = useForm<FormData>({
//    resolver: zodResolver(schema),
// });

// const handleSubmit = hookFormHandleSubmit(async (data) => {
//    //API Call

//    try {
//       // const { accessToken } = await mutateAsync(data);
//       // signin(accessToken);
//       console.log('try')
//    } catch (error: any | typeof AxiosError) {
//       console.log(error);
//       toast({
//          title: "Erro",
//          description: error.response.data.message,
//          variant: "destructive",
//       });
//    }
// });

const SignUp: React.FC = () => {
  const { signin } = useAuth();
  const { toast } = useToast();
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending: isLoading, mutateAsync } = useMutation({
    mutationKey: ["sign-UP"],
    mutationFn: async (data: SignUpParams) => {
      return await authService.signUp(data);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    //API Call

    try {
      const { accessToken } = await mutateAsync({
        ...data,
        permissionLevel: PermissionLevel.ADMIN,
      });
      signin(accessToken);
    } catch (error: any | typeof AxiosError) {
      console.log(error);
      toast({
        title: "Erro",
        description: error.response.data.message,
        variant: "destructive",
      });
    }
  });
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle className="text-xl">Cadastre-se</CardTitle>
          <CardDescription>
            Preencha com seus dados e as informações da sua empresa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  placeholder="Digite seu nome completo"
                  {...register("name")}

                  // {...register("name")}
                  // className={errors.name ? "border-red-500" : ""}
                />
                {/* {errors.name && <p className="text-red-500">{errors.name.message}</p>} */}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                  // {...register("email")}
                  // className={errors.email ? "border-red-500" : ""}
                />
                {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Digite seu telefone"
                {...register("phone")}
                // className={errors.phone ? "border-red-500" : ""}
              />
              {/* {errors.phone && <p className="text-red-500">{errors.phone.message}</p>} */}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Escolha uma senha forte"
                {...register("password")}
                // className={errors.password ? "border-red-500" : ""}
              />
              {/* {errors.password && <p className="text-red-500">{errors.password.message}</p>} */}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="company-name">Nome da Empresa</Label>
              <Input
                id="company-name"
                placeholder="Nome da Empresa"
                {...register("company.name")}
                // className={errors.company?.name ? "border-red-500" : ""}
              />
              {/* {errors.company?.name && <p className="text-red-500">{errors.company?.name.message}</p>} */}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="company-registration">Registro da Empresa</Label>
              <Input
                id="company-registration"
                placeholder="Digite o CNPJ ou identificador internacional da empresa"
                {...register("company.companyRegistration")}
                // className={errors.company?.companyRegistration ? "border-red-500" : ""}
              />
              {/* {errors.company?.companyRegistration && (
                        <p className="text-red-500">{errors.company?.companyRegistration.message}</p>
                     )} */}
            </div>

            <div className="grid gap-2">
              <Controller
                control={control}
                name="role"
                render={({ field: { value, onChange } }) => (
                  <RadioGroup
                    defaultValue="comfortable"
                    onValueChange={onChange}
                    value={value}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="FORNECEDOR" id="r1" />
                      <Label htmlFor="r1">FORNECEDOR</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="COMPRADOR" id="r2" />
                      <Label htmlFor="r2">COMPRADOR</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="AMBOS" id="r3" />
                      <Label htmlFor="r3">AMBOS</Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            <Button type="submit" className="w-full bg-orange-500">
              Criar conta
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            Já tenho uma conta.{" "}
            <Link href="/sign-in" className="underline text-orange-500">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default SignUp;
