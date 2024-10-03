"use client";
import { signIn } from "next-auth/react";
import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loading from "../../../loading";
import { LoginForm } from "@/components/auth/SignInForm";

const SignIn: React.FC = () => {
   return (
      <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
         <LoginForm/>
      </div>
   );
};

export default SignIn;
