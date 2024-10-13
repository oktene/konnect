"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import opportunityService from "@/services/opportunity/opportunityService";

export type OpportunityWCompany = {
  id: string;
  codeRFQ: string;
  description: string;
  deadlineSubmission: Date;
  typeOpportunity: "Serviço" | "Material";
  isExpired: boolean;
  company: string;
  subCategory?: { id: string; name: string }[];
  // attachments?: { id: string; filename: string; url: string }[];
  // proposals?: { id: string; }[];
};

const MinhasOportunidades = () => {
  const { user } = useAuth();

  // const { data, isLoading, isSuccess } = useQuery<OpportunityWCompany[]>({
  //   queryKey: ["opportunity", user?.company?.id], // Use o ID correto
  //   queryFn: async () => {
  //     if (!user?.company?.id) return []; // Evitar chamadas se companyId não estiver disponível
  //     return await opportunityService.getAllByCompanyId(user.company.id); // Retorna um array de oportunidades
  //   },
  //   enabled: !!user?.company?.id, // Habilitar apenas quando companyId estiver disponível
  // });

  // const myOpportunities =
  //   data?.map((opportunity) => ({
  //     id: opportunity.id,
  //     codeRFQ: opportunity.codeRFQ,
  //     description: opportunity.description,
  //     deadlineSubmission: new Date(opportunity.deadlineSubmission), 
  //     typeOpportunity: opportunity.typeOpportunity,
  //     isExpired: opportunity.isExpired, 
  //     company: opportunity.company, 
  //     subCategory: opportunity.subCategory || [],
  //     // attachments: opportunity.attachments,
  //     // proposals: opportunity.proposals
  //   })) || [];

  return (
    <ContentLayout title="Konnect">
      <main>
        <div className="grid mt-2">
          <div className="grid-flow-row">
            <p className="text-zinc-900 text-lg">Minhas Oportunidades</p>
            {/* <NewOportunityModal handleAddOpportunity={handleAddOpportunity} /> */}
          </div>
        </div>
        <div>
          {/* <DataTable columns={columns} data={myOpportunities} /> */}
        </div>
      </main>
    </ContentLayout>
  );
};
export default MinhasOportunidades;
