import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/zodSchemas/login.schema";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Suspense } from "react";
import Loading from "@/app/[locale]/loading";
import { Link } from "@/i18n/routing";

interface LoginFormData {
   email: string;
   password: string;
}

export function LoginForm() {
   const { login, isLoggingIn } = useAuth();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginFormData>({
      resolver: zodResolver(loginSchema),
   });

   const onSubmit = (data: LoginFormData) => {
      login(data);
   };

   return (
    <Suspense fallback={<Loading/>}>
      <Card className="mx-auto max-w-sm">
         <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
               Enter your email below to login to your account
            </CardDescription>
         </CardHeader>
         <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
               <div className="grid gap-4">
                  <div className="grid gap-2">
                     <Label htmlFor="email">Email</Label>
                     <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        {...register("email")}
                     />
                     {errors.email && (
                        <p className="text-red-600 text-sm">
                           {errors.email.message}
                        </p>
                     )}
                  </div>
                  <div className="grid gap-2">
                     <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <Link
                           href="/reset-password"
                           className="ml-auto inline-block text-sm underline"
                        >
                           Forgot your password?
                        </Link>
                     </div>
                     <Input
                        id="password"
                        type="password"
                        {...register("password")}
                     />
                     {errors.password && (
                        <p className="text-red-600 text-sm">
                           {errors.password.message}
                        </p>
                     )}
                  </div>
                  <Button
                     type="submit"
                     className="w-full"
                     disabled={isLoggingIn}
                  >
                     {isLoggingIn ? "Logging in..." : "Login"}
                  </Button>
               </div>
               <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="#" className="underline">
                     Sign up
                  </Link>
               </div>
            </CardContent>
         </form>
      </Card>
    </Suspense>
   );
}
