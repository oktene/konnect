"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { DataTable } from "./data-table";
import { demandas } from "./columns";
import { Opportunity } from "@/zodSchemas/opportunity";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import opportunityService, { GetOpportunitiesParams } from "@/services/opportunity/opportunityService";
import { useMyProposals, useProposals } from "@/hooks/useProposals";
import { Suspense } from "react";
import Loading from "@/app/[locale]/loading";

const OportunidadesVisualizadas = async () => {
   const { user } = useAuth();
   const { data, isLoading } = await useMyProposals(user?.company.id!);
   console.log(demandas)
   
   return (
      <ContentLayout title="Konnect">
         <main className="w-full">
            <div className="mt-2">
               <p className="text-zinc-900 text-lg">
                  Oportunidades Visualizadas
               </p>
            </div>
            <div>
            <Suspense fallback={<Loading />}>
                  {isLoading ? (
                     <Loading />
                  ) : (
                     //@ts-ignore
                     <DataTable columns={demandas} data={data} />
                  )}
               </Suspense>
            </div>
         </main>
      </ContentLayout>
   );
};

export default OportunidadesVisualizadas;