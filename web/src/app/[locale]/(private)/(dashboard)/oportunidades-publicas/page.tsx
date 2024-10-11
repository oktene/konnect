"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";

import { columns, Opportunity } from "./columns";
import React, { Suspense } from "react";
import Loading from "@/app/[locale]/loading";
import Skeleton from "react-loading-skeleton";
import { DataTable } from "./data-table";
import opportunityService from "@/services/opportunity/opportunityService";
import { useQuery } from "@tanstack/react-query";

const OportunidadesPublicas = () => {
   const { data, isLoading, isSuccess } = useQuery<Opportunity[]>({
      queryKey: ["opportunity"],
      queryFn: async () => {
         return await opportunityService.getOpportunities();
      },
   });

   const publicOpportunities =
      data?.map((opportunity) => ({
         id: opportunity.id,
         codeRFQ: opportunity.codeRFQ,
         description: opportunity.description,
         deadlineSubmission: opportunity.deadlineSubmission as Date,
         typeOpportunity: opportunity.typeOpportunity,
         isExpired: opportunity.isExpired as boolean,
         company: opportunity.company,
         subCategory: opportunity.subCategory || [],
         attachments: opportunity.attachments,
         proposals: opportunity.proposals,
      })) || [];

   return (
      <ContentLayout title="Konnect">
         <main>
            <div className="mt-2">
               <p className="text-zinc-900 text-lg">
                  {isSuccess ? "Oportunidades Públicas" : <Skeleton />}
               </p>
            </div>
            <Suspense fallback={<Loading />}>
               <div>
                  <DataTable columns={columns} data={publicOpportunities} />
               </div>
            </Suspense>
         </main>
      </ContentLayout>
   );
};

export default OportunidadesPublicas;
