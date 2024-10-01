"use client";
import { signIn } from "next-auth/react";
import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loading from "../../../loading";

const SignIn: React.FC = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      await signIn("credentials", {
         redirect: false,
         email,
         password,
      });
   };

   return (
      <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] overflow-y-hidden">
         <div className="flex items-center justify-center h-screen">
            <div className="mx-auto grid w-[350px] gap-6">
               <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Login</h1>
                  <p className="text-balance text-muted-foreground">
                     Seja bem-vindo ao Konnect.
                     O ambiente de oportunidades Oil & Gas do Brasil
                  </p>
               </div>
              <Suspense fallback={<Loading/>}>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                          <Label htmlFor="password">Senha</Label>
                          <Link
                            href="/forgot-password"
                            className="ml-auto inline-block text-sm underline"
                          >
                            Esqueci minha senha
                          </Link>
                      </div>
                      <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                      Login
                    </Button>
                </div>
               </Suspense>
               <div className="mt-4 text-center text-sm">
                  Não possui conta?{" "}
                  <Link href="#" className="underline">
                     Cadastre suas oportunidades
                  </Link>
               </div>
            </div>
         </div>
         <div className="hidden bg-muted lg:block h-screen ">
            <Image
               src="/placeholder.png"
               alt="Image"
               width="1920"
               height="1080"
               className="h-[100vh] w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
         </div>
      </div>
   );

   //  return (
   //     <div style={{ maxWidth: "300px", margin: "auto" }}>
   //        <h1>Sign In</h1>
   //        <form onSubmit={handleSubmit}>
   //           <label>
   //              Email
   //              <input
   //                 type="text"
   //                 value={email}
   //                 onChange={(e) => setEmail(e.target.value)}
   //              />
   //           </label>
   //           <label>
   //              Password
   //              <input
   //                 type="password"
   //                 value={password}
   //                 onChange={(e) => setPassword(e.target.value)}
   //              />
   //           </label>
   //           <button type="submit">Sign In</button>
   //        </form>
   //     </div>
   //  );
};

export default SignIn;
