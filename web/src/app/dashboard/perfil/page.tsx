"use client";

import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ContentLayout } from "@/src/components/admin-panel/content-layout";
import Link from "next/link";

const Perfil = () => {
   return (
      <ContentLayout title="Meu Perfil">
         <Breadcrumb>
            <BreadcrumbList>
               <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                     <Link href="/">Home</Link>
                  </BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbSeparator />
               <BreadcrumbItem>
                  <BreadcrumbPage>Meu Perfil</BreadcrumbPage>
               </BreadcrumbItem>
            </BreadcrumbList>
         </Breadcrumb>
         <div className="flex flex-col w-full mt-2">
            <p className="text-zinc-900 text-lg">Meu perfil</p>
         </div>
      </ContentLayout>
   );
};

export default Perfil;
