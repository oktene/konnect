"use client";
import { signIn } from "next-auth/react";
import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loading from "../../../loading";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { authService, SigninParams } from "@/services/auth/authService";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { EyeOff, Eye } from "lucide-react";

const schema = z.object({
   email: z.string().min(1).email("Informe um E-mail válido."),
   password: z
      .string()

      .min(1, "A senha deve conter pelo menos 3 dígitos"),
});

type FormData = z.infer<typeof schema>;

const SignIn: React.FC = () => {
   const [email, setEmail] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   //Importando do Auth Context
   const { signin } = useAuth();
   const { toast } = useToast();

   const { isPending: isLoading, mutateAsync } = useMutation({
      mutationKey: ["sign-in"],
      mutationFn: async (data: SigninParams) => {
         return await authService.signIn(data);
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
         const { accessToken } = await mutateAsync(data);
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
      <div className="w-full h-screen lg:grid lg:min-h-[600px] xl:min-h-[800px]">
         <div className="flex items-center justify-center h-screen">
            <Card className="w-full max-w-sm">
               <CardHeader className="flex justify-center items-center">
                  <CardTitle className="text-2xl">Login</CardTitle>
                  <CardDescription className="text-center">
                     Bem-vindo ao Konnect. <br />O mundo de oportunidades Oil &
                     Gas.
                  </CardDescription>
               </CardHeader>
               <CardContent className="grid gap-4">
                  <Suspense fallback={<Loading />}>
                     <form onSubmit={handleSubmit}>
                        <div className="grid gap-4">
                           <div className="grid gap-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                 id="email"
                                 type="email"
                                 placeholder="m@example.com"
                                 required
                                 {...register("email")}
                              />
                              {errors.email?.message && (
                                 <div className="flex gap-2 items-center mt-2 p-[2px] rounded-md text-red-700 font-semibold bg-redAccent-500 w-full ">
                                    <CrossCircledIcon />
                                    <span className="text-xs">
                                       {errors.email?.message}
                                    </span>
                                 </div>
                              )}
                           </div>
                           <div className="grid gap-2">
                              <div className="flex items-center">
                                 <Label htmlFor="password">Senha</Label>
                                 {/* <Link
                                    href="/forgot-password"
                                    className="ml-auto inline-block text-sm underline"
                                  >
                                    Esqueci minha
                                  </Link> */}
                              </div>
                              <Input
                                 id="password"
                                 type="password"
                                 required
                                 {...register("password")}
                              />
                              {/* <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                              >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                              </button> */}
                              {errors.password?.message && (
                                 <div className="flex gap-2 items-center mt-2 p-[2px] rounded-md text-red-700 font-semibold bg-redAccent-500 w-full ">
                                    <CrossCircledIcon />
                                    <span className="text-xs">
                                       {errors.password?.message}
                                    </span>
                                 </div>
                              )}
                           </div>
                           <Button
                              type="submit"
                              className="w-full bg-orange-600"
                           >
                              Login
                           </Button>
                        </div>
                     </form>
                  </Suspense>
                  <div className="mt-4 text-center text-sm">
                     Não possui conta?{" "}
                     <Link
                        href="/sign-up"
                        className="underline text-orange-600 hover"
                     >
                        Cadastre-se
                     </Link>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
   );
};

export default SignIn;
