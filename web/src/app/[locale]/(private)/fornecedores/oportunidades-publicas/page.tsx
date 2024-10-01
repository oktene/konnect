"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Link, PlusCircle, PlusIcon } from "lucide-react";

import { columns } from "./columns";

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
import { DataTable } from "./data-table";

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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
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
      company: "company123",
      subCategory: "subCat456",
    },
    {
      id: "728ed52f",
      codeRFQ: "RFQ1234567",
      description: "Drilling equipment",
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
      company: "company123",
      subCategory: "subCat456",
    },
  ];
}

const OportunidadesPublicas = async () => {
  const data = await getData();

  return (
    <ContentLayout title="Konnect">
      <main>
        <div className="mt-2 ">
          <p className="text-zinc-900 text-lg">
            {`Oportunidades Públicas` || <Skeleton />}
          </p>
        </div>
        <Suspense fallback={<Loading />}>
          <div className="">
            <DataTable columns={columns} data={data} />
          </div>
        </Suspense>
      </main>
    </ContentLayout>
  );
};

export default OportunidadesPublicas;
