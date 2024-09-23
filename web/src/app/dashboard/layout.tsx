"use client";

import Header from '@/src/components/layout/Header';
import Sidebar from '@/src/components/layout/Sidebar';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full ">
        <main className="p-4 ml-580">{children}</main>
      </div>
    </div>
  );
}