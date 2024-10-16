"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import React, { Suspense, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { AppliedBy, columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import opportunityService from "@/services/opportunity/opportunityService";
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import Loading from "@/app/[locale]/loading";
import { DataTable } from "./data-table";
import { useMyOpportunities } from "@/hooks/useOpportunities";

export type OpportunityWCompany = {
   id: string;
   codeRFQ: string;
   description: string;
   deadlineSubmission: Date;
   typeOpportunity: "Serviço" | "Material";
   isExpired: boolean;
   company: string;
   subCategory?: { id: string; name: string }[];
   attachments?: { id: string; filename: string; url: string }[];
   proposals?: {
      id: string;
      appliedBy: AppliedBy;
      appliedAt: Date;
   }[];
};

const MinhasOportunidades = () => {
   const { user } = useAuth();

   const { data, isLoading } = useMyOpportunities(user?.company.id!);

   const myOpportunities =
      data?.map((opportunity) => ({
         id: opportunity.id,
         codeRFQ: opportunity.codeRFQ,
         description: opportunity.description,
         deadlineSubmission: new Date(opportunity.deadlineSubmission),
         typeOpportunity: opportunity.typeOpportunity,
         isExpired: opportunity.isExpired,
         company: opportunity.company,
         subCategory: opportunity.subCategory || [],
         attachments: opportunity.attachments,
         proposals: opportunity.proposals,
      })) || [];

   return (
      <ContentLayout title="Konnect">
         <main>
            <div className="grid mt-2">
               <div className="grid-flow-row">
                  <p className="text-zinc-900 text-lg">Minhas Oportunidades</p>
                  {isLoading && (
                     <Dialog>
                        <DialogContent
                           className="text-center"
                           onCloseAutoFocus={(e) => e.preventDefault()}
                        >
                           <DialogHeader>
                              <Spinner className="text-white w-24 h-24 animate-spin" />
                              <DialogTitle>
                                 Cadastrando usuário e empresa
                              </DialogTitle>
                           </DialogHeader>
                           <p>Carregando suas oportunidades...</p>
                        </DialogContent>
                     </Dialog>
                  )}
                  {/* <NewOportunityModal handleAddOpportunity={handleAddOpportunity} /> */}
               </div>
            </div>
            <div>
               <Suspense fallback={<Loading />}>
                  {isLoading ? (
                     <Loading />
                  ) : (
                     <DataTable columns={columns} data={myOpportunities} />
                  )}
               </Suspense>
            </div>
         </main>
      </ContentLayout>
   );
};

export default MinhasOportunidades;
