"use client";

import { Opportunity } from "@/src/zodSchemas/opportunity";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Opportunity>[] = [
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