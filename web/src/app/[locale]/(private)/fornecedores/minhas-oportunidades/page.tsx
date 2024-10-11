"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import React, { useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { NewOportunityModal, TenporaryOpportunity } from "./modals/NewOportnityModal";
import { useQuery } from "@tanstack/react-query";
import opportunityService from "@/services/opportunity/opportunityService";
import { useAuth } from "@/hooks/useAuth";
import { Opportunity } from "../../(dashboard)/oportunidades-publicas/columns";

const MinhasOportunidades = () => {
  const { user } = useAuth();
  const initialData: Opportunity[] = [
    {
      id: "728ed52f",
      codeRFQ: "RFQ12345",
      description: "Supply of drilling equipment",
      executionPeriod: new Date("2024-12-31"),
      deadlineSubmission: new Date("2024-11-01"),
      typeOpportunity: "Serviço",
      isExpired: false,
      attachments: [
        {
          id: "att1",
          filename: "specifications.pdf",
          url: "https://example.com/specifications.pdf",
        },
      ],
      proposals: [
        {
          id: "prop1",
          amount: 1500,
          status: "Pending",
        },
      ],
      subCategory: "subCat456",
    },
  ];

  const [minhasOportunidades, setMinhasOportunidades] =
    useState<Opportunity[]>(initialData);

  const handleAddOpportunity = (newOpportunity: TenporaryOpportunity) => {
    setMinhasOportunidades((prevOportunidades) => [
      ...prevOportunidades,
      {
        id: "728ed52f",
        codeRFQ: "RFQ12345",
        description: newOpportunity.description,
        executionPeriod: new Date("2024-12-31"),
        deadlineSubmission: new Date("2024-11-01"),
        typeOpportunity: newOpportunity.typeOpportunity,
        isExpired: false,
        attachments: [
          {
            id: "att1",
            filename: "specifications.pdf",
            url: "https://example.com/specifications.pdf",
          },
        ],
        proposals: [
          {
            id: "prop1",
            amount: 1500,
            status: "Pending",
          },
        ],
        subCategory: newOpportunity.subCategory,
      },
    ]);
  };

  const { data, isLoading, isSuccess } = useQuery<Opportunity[]>({
    queryKey: ["opportunity", user?.company?.id],
    queryFn: async () => {
      if (!user?.company?.id) return [];
      return await opportunityService.getAllByCompanyId(user.company.id);
    },
    enabled: !!user?.company?.id,
  });

 const myOpportunities =
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
        <div className="grid mt-2">
          <div className="grid-flow-row">
            <p className="text-zinc-900 text-lg">Minhas Oportunidades</p>
            <NewOportunityModal handleAddOpportunity={handleAddOpportunity} />
          </div>
        </div>
        <div>
          <DataTable columns={columns} data={myOpportunities} />
        </div>
      </main>
    </ContentLayout>
  );
};

export default MinhasOportunidades;
