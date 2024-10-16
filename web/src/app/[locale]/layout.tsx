import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "../../lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import SplashScreenWrapper from "./SplashScreenWrapper";
import { QueryProvider } from "@/context/QueryProvider";
import { AuthProvider } from "../contexts/AuthContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konnect",
  description: "",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale='br'}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <QueryProvider>
        <NextIntlClientProvider messages={messages}>
          <body className={cn("", poppins.className)}>
            <AuthProvider>
              <SplashScreenWrapper>
                {children}
              </SplashScreenWrapper>
              <Toaster />
            </AuthProvider>
            <ReactQueryDevtools />
          </body>
        </NextIntlClientProvider>
      </QueryProvider>
    </html>
  );
}
