"use client";

import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

import { ModeToggle } from "@/components/mode-toggle";
import { QueryProvider } from "@/context/QueryProvider";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <div className="flex flex-col w-full ">
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <AdminPanelLayout>
              {children}
            </AdminPanelLayout>
          </ThemeProvider>
        </QueryProvider>
      </div>
    </div>
  );
}
