import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Link, PlusCircle } from "lucide-react";

import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Opportunity } from "@/zodSchemas/opportunity";
import React, { Suspense } from "react";
import Loading from "@/app/[locale]/loading";
import Skeleton from "react-loading-skeleton";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Opportunity[]> {
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
      {
         id: "728ed52f",
         codeRFQ: "RFQ1234567",
         description: "Drilling equipment",
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
   const data = await getData();

   return (
      <ContentLayout title="Konnect">
         {/* <Breadcrumb>
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
         </Breadcrumb> */}
         <main>
            <div className="mt-2">
               <p className="text-zinc-900 text-lg">
                  {`Oportunidades Públicas` || <Skeleton />}
               </p>
            </div>
            <Suspense fallback={<Loading />}>
               <div>
                  <DataTable columns={columns} data={data} />
               </div>
            </Suspense>
         </main>
      </ContentLayout>
   );
};

export default OportunidadesPublicas;
