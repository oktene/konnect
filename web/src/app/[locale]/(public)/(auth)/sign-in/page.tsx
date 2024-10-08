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

const schema = z.object({
  email: z.string().min(1).email("Informe um E-mail válido."),
  password: z
    .string()

    .min(1, "A senha deve conter pelo menos 3 dígitos"),
});

type FormData = z.infer<typeof schema>;

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center h-screen">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
            Bem-vindo ao Konnect
            </p>
          </div>
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
                    <div className="flex gap-2 items-center mt-2 p-[2px] rounded-md text-white font-semibold bg-redAccent-500 w-full ">
                      <CrossCircledIcon />
                      <span className="text-xs">{errors.email?.message}</span>
                    </div>
                  )}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                    <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    {...register("password")}
                  />
                  {errors.password?.message && (
                    <div className="flex gap-2 items-center mt-2 p-[2px] rounded-md text-white font-semibold bg-redAccent-500 w-full ">
                      <CrossCircledIcon />
                      <span className="text-xs">{errors.password?.message}</span>
                    </div>
                  )}
                </div>
                <Button type="submit" className="w-full ">
                  Login
                </Button>
              </div>
            </form>
          </Suspense>
          <div className="mt-4 text-center text-sm">
            Não possui conta?{" "}
            <Link href="#" className="underline">
              Clique aqui e cadastre-se agora
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default SignIn;
