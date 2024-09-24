"use client";

import { ColumnDef } from "@tanstack/react-table";
import { z } from 'zod';

const AttachmentSchema = z.object({
  id: z.string().uuid(),
  filename: z.string(),
  url: z.string().url(),
});

const ProposalSchema = z.object({
  id: z.string().uuid(),
  amount: z.number(),
  status: z.enum(["pending", "accepted", "rejected"]),
});

const CompanySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

const SubCategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

const TypeOpportunitySchema = z.enum(["service", "product"]);

// Main schema for the table row
export const OpportunitySchema = z.object({
    id: z.string(),
    codeRFQ: z.string(),
    description: z.string(),
    quantity: z.number().optional(),
    unityMetric: z.string().optional(),
    executionPeriod: z.date().optional(),
    deadlineSubmission: z.date(),
    typeOpportunity: z.enum(["Service", "Product"]),
    isExpired: z.boolean().default(false),
    attachments: z.array(z.object({ id: z.string(), filename: z.string(), url: z.string().url() })),
    proposals: z.array(z.object({ id: z.string(), amount: z.number(), status: z.enum(["Pending", "Accepted", "Rejected"]) })),
    companyId: z.string(),
    subCategoryId: z.string(),
  });

export type DataTableRow = z.infer<typeof OpportunitySchema>;

export const columns: ColumnDef<DataTableRow>[] = [
  {
    accessorKey: "codeRFQ",
    header: "RFQ Code",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ getValue }) => getValue() ?? "N/A", // Handling optional field
  },
  {
    accessorKey: "unityMetric",
    header: "Unit Metric",
    cell: ({ getValue }) => getValue() ?? "N/A", // Handling optional field
  },
  {
    accessorKey: "executionPeriod",
    header: "Execution Period",
    cell: ({ getValue }) => getValue() ? new Date(getValue() as string | number | Date).toLocaleDateString() : "N/A", // Format date if exists
  },
  {
    accessorKey: "deadlineSubmission",
    header: "Deadline Submission",
    cell: ({ getValue }) => new Date(getValue() as string | number | Date).toLocaleDateString(), // Format date
  },
  {
    accessorKey: "typeOpportunity",
    header: "Type",
  },
  {
    accessorKey: "isExpired",
    header: "Expired",
    cell: ({ getValue }) => (getValue() ? "Yes" : "No"), // Boolean handling
  },
//   {
//     accessorKey: "company.name",
//     header: "Company",
//   },
//   {
//     accessorKey: "subCategory.name",
//     header: "SubCategory",
//   },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue }) => new Date(getValue() as string | number | Date).toLocaleDateString(), // Format date
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ getValue }) => new Date(getValue() as string | number | Date).toLocaleDateString(), // Format date
  },
];