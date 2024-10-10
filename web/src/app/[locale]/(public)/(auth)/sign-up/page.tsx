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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { authService, SignUpParams } from "@/services/auth/authService";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";

enum roleType {
   FORNECEDOR = 'FORNECEDOR',
   COMPRADOR = 'COMPRADOR',
   AMBOS = 'AMBOS'
}

const schema = z.object({
   name: z.string(),
   email: z.string().min(1).email("Informe um e-mail válido."),
   password: z
      .string()
      .min(1, "A senha deve conter pelo menos 3 dígitos"),
   phone: z.string().regex(/^\d{10,15}$/),
   role: z.nativeEnum(roleType),
   company: z.object({
      name: z.string(),
      companyRegistration: z.string()
   })
});

type FormData = z.infer<typeof schema>;

//Importando do Auth Context
const { signin } = useAuth();
const { toast } = useToast();

const { isPending: isLoading, mutateAsync } = useMutation({
   mutationKey: ["sign-up"],
   mutationFn: async (data: SignUpParams) => {
      return await authService.signUp(data);
   },
});

const {
   handleSubmit: hookFormHandleSubmit,
   register,
   formState: { errors },
} = useForm<FormData>({
   resolver: zodResolver(schema),
});

const handleSubmit = hookFormHandleSubmit(async (data) => {
   //API Call

   try {
      // const { accessToken } = await mutateAsync(data);
      // signin(accessToken);
      console.log('try')
   } catch (error: any | typeof AxiosError) {
      console.log(error);
      toast({
         title: "Erro",
         description: error.response.data.message,
         variant: "destructive",
      });
   }
});

const SignUp: React.FC = () => {
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
               <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                     <Label htmlFor="name">Nome</Label>
                     <Input
                        id="name"
                        placeholder="Digite seu nome"
                        {...register("name")}
                        className={errors.name ? "border-red-500" : ""}
                     />
                     {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                  </div>

                  <div className="grid gap-2">
                     <Label htmlFor="email">Email</Label>
                     <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        {...register("email")}
                        className={errors.email ? "border-red-500" : ""}
                     />
                     {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>

                  <div className="grid gap-2">
                     <Label htmlFor="phone">Telefone</Label>
                     <Input
                        id="phone"
                        type="tel"
                        placeholder="Digite seu telefone"
                        {...register("phone")}
                        className={errors.phone ? "border-red-500" : ""}
                     />
                     {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                  </div>

                  <div className="grid gap-2">
                     <Label htmlFor="password">Senha</Label>
                     <Input
                        id="password"
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                        className={errors.password ? "border-red-500" : ""}
                     />
                     {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                  </div>

                  <div className="grid gap-2">
                     <Label htmlFor="company-name">Nome da Empresa</Label>
                     <Input
                        id="company-name"
                        placeholder="Nome da Empresa"
                        {...register("company.name")}
                        className={errors.company?.name ? "border-red-500" : ""}
                     />
                     {errors.company?.name && <p className="text-red-500">{errors.company?.name.message}</p>}
                  </div>

                  <div className="grid gap-2">
                     <Label htmlFor="company-registration">Registro da Empresa</Label>
                     <Input
                        id="company-registration"
                        placeholder="Digite o registro da empresa"
                        {...register("company.companyRegistration")}
                        className={errors.company?.companyRegistration ? "border-red-500" : ""}
                     />
                     {errors.company?.companyRegistration && (
                        <p className="text-red-500">{errors.company?.companyRegistration.message}</p>
                     )}
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
}
export default SignUp;
