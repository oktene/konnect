
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Link } from "lucide-react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Opportunity } from "@/zodSchemas/opportunity";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function getData(): Promise<Opportunity[]> {
    // Retorne dados fictícios de exemplo correspondendo ao esquema Opportunity
    return [
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
        company: "Conterp",
        subCategory: [
          {
             id: "1",
             name: "Válvulas" 
          },
          {
             id: "2",
             name: "Tubos" 
          },
       ],
      },
    ];
  }

const MinhasOportunidades = async () => {
    const minhasOportunidades = await getData()

   return (
      <ContentLayout title="Konnect">
         <main>
            <div className="mt-2">
                  <p className="text-zinc-900 text-lg">Minhas Oportunidades</p>
            </div>
            <div>
                  <DataTable columns={columns} data={minhasOportunidades} />
            </div>
         </main>
      </ContentLayout>
   );
};

export default MinhasOportunidades;
