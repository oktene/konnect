"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { DataTable } from "./data-table";
import { demandas } from "./columns";
import { Opportunity } from "@/zodSchemas/opportunity";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import opportunityService, { GetOpportunitiesParams } from "@/services/opportunity/opportunityService";

async function getData(): Promise<Opportunity[]> {
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
         company: "Acelen",
         subCategory: [
            {
               id: "1",
               name: "Válvulas",
            },
            {
               id: "2",
               name: "Tubos",
            },
         ],
      },

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
         company: "Acelen",
         subCategory: [
            {
               id: "1",
               name: "Válvulas",
            },
            {
               id: "2",
               name: "Tubos",
            },
         ],
      },
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
         company: "Acelen",
         subCategory: [
            {
               id: "1",
               name: "Válvulas",
            },
            {
               id: "2",
               name: "Tubos",
            },
         ],
      },
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
               name: "Válvulas",
            },
         ],
      },
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
               name: "Válvulas",
            },
            {
               id: "2",
               name: "Tubos",
            },
         ],
      },
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
               name: "Válvulas",
            },
            {
               id: "2",
               name: "Tubos",
            },
         ],
      },
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
               name: "Válvulas",
            },
            {
               id: "2",
               name: "Tubos",
            },
         ],
      },
   ];
}

// const { signin } = useAuth();
// const { toast } = useToast();

// const { isPending: isLoading, mutateAsync } = useMutation({
//    mutationKey: ["opportunities"],
//    mutationFn: async () => {
//       return await opportunityService.getOpportunities();
//    },
// });

const OportunidadesVisualizadas = async () => {
   const data = await getData();

   return (
      <ContentLayout title="Konnect">
         <main className="w-full">
            <div className="mt-2">
               <p className="text-zinc-900 text-lg">
                  Oportunidades Visualizadas
               </p>
            </div>
            <div>
               <DataTable columns={demandas} data={data} />
            </div>
         </main>
      </ContentLayout>
   );
};

export default OportunidadesVisualizadas;
