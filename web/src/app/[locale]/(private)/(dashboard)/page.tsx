"use client";

import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import Link from "next/link";

const Dashboard = () => {
   return (
      <ContentLayout title="Dashboard">
         <div className="flex flex-col w-full mt-2">
            <p className="text-zinc-900 text-lg">Dashboard</p>
         </div>
      </ContentLayout>
   );
};

export default Dashboard;