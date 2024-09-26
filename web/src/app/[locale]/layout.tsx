import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "../../lib/utils";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { useEffect, useState } from "react";
import SplashScreenWrapper from "./SplashScreenWrapper";

const poppins = Poppins({
  weight: ["400", "600", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Konnect",
  description: "",
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <NextIntlClientProvider messages={messages}>
        <body className={
          cn(
            "",
            poppins.className
          )}>
            <SplashScreenWrapper>{children}</SplashScreenWrapper>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
