"use client";

import AdminPanelLayout from '@/src/components/admin-panel/admin-panel-layout';
import Sidebar from '@/src/components/layout/Sidebar';
import { ModeToggle } from '@/src/components/mode-toggle';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
        <AdminPanelLayout children={undefined}/>
        <div className="flex flex-col w-full ">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <main className="flex flex-col w-full ">
              {children}
            </main>
          </ThemeProvider>
        </div>
    </div>
  );
}