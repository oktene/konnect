"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { DataTable } from "./data-table";
import { columns } from "./columns";

interface Company {
  id: string;
  name: string;
  companyRegistration: string;
}

interface Attachment {
  id: string;
  filename: string;
  url: string;
}

interface Proposal {
  id: string;
  amount: number;
}

interface Opportunity {
  id: string;
  codeRFQ: string;
  description: string;
  deadlineSubmission: Date;
  typeOpportunity: string;
  isExpired: boolean;  // Empresa representada como um array de objetos `Company`
  attachments: Attachment[];
  proposals: Proposal[];
}

const MinhasOportunidades = () => {
  const { user } = useAuth();
  const myOpportunities:Opportunity[] = [
    {
      id: "728ed52f",
      codeRFQ: "RFQ12345",
      description: "Supply of drilling equipment",
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
        },
      ],
    },
  ];

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
          <DataTable columns={columns} data={myOpportunities} />
        </div>
      </main>
    </ContentLayout>
  );
};

export default MinhasOportunidades;
