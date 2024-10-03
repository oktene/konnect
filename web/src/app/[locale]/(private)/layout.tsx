"use client";

import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
   return (
      <div className="flex">
         <div className="flex flex-col w-full ">
               <ThemeProvider
                  attribute="class"
                  defaultTheme="light"
                  enableSystem
               >
                  <AdminPanelLayout children={children} />
               </ThemeProvider>
         </div>
      </div>
   );
}
