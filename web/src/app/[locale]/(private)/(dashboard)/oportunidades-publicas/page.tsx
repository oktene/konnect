"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";

import { columns, Opportunity } from "./columns";
import React, { Suspense } from "react";
import Loading from "@/app/[locale]/loading";
import { DataTable } from "./data-table";
import { useOpportunities } from "@/hooks/useOpportunities";

const OportunidadesPublicas = () => {
   const { data, isLoading } = useOpportunities();

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
               <p className="text-zinc-900 text-lg">Oportunidades Públicas</p>
            </div>
            <Suspense fallback={<Loading />}>
            {isLoading? (
               <Loading />
            ) : (
                  <DataTable columns={columns} data={publicOpportunities} />
            )}
            </Suspense>
         </main>
      </ContentLayout>
   );
};

export default OportunidadesPublicas;
