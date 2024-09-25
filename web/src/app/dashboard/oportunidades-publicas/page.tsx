
import {
   Breadcrumb,
   BreadcrumbList,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbSeparator,
   BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ContentLayout } from "@/src/components/admin-panel/content-layout";
import { Link } from "lucide-react";

import { columns } from "./columns";
import { DataTable } from "@/src/components/ui/data-table";
import { DataTableRow } from './columns'

async function getData(): Promise<DataTableRow[]> {
    // Retorne dados fictícios de exemplo correspondendo ao esquema Opportunity
    return [
      {
        id: "728ed52f",
        codeRFQ: "RFQ12345",
        description: "Supply of drilling equipment",
        quantity: 10,
        unityMetric: "pieces",
        executionPeriod: new Date("2024-12-31"),
        deadlineSubmission: new Date("2024-11-01"),
        typeOpportunity: "Service",
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
        companyId: "company123",
        subCategoryId: "subCat456",
      },
    ];
  }

const OportunidadesPublicas = async () => {
    const data = await getData()

   return (
      <ContentLayout title="Konnect">
         <Breadcrumb>
            <BreadcrumbList>
               <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                     <Link href="/">Home</Link>
                  </BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbSeparator />
               <BreadcrumbItem>
                  <BreadcrumbPage>Oportunidades Públicas</BreadcrumbPage>
               </BreadcrumbItem>
            </BreadcrumbList>
         </Breadcrumb>
         <main>
            <div className="flex flex-col w-full mt-2">
                <p className="text-zinc-900 text-lg">Oportunidades Públicas</p>
            </div>
            <div>
                <DataTable columns={columns} data={data} />
            </div>
         </main>
      </ContentLayout>
   );
};

export default OportunidadesPublicas;
