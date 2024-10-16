"use client";

import { Badge } from "@/components/ui/badge";
import { Proposal } from "@/hooks/useProposals";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import ActionsCell from "./ActionsCell";

//@ts-ignore
const FormattedDateCell = ({ value }) => {
   const date = new Date(value as string | number | Date);
   const formattedDate = format(date, 'dd/MM/yyyy à HH:mm');
   
   return <span>{formattedDate}</span>;
};

export const demandas: ColumnDef<Proposal>[] = [
   {
      accessorKey: "codeRFQ",
      header: "Código RFQ",
   },
   {
      accessorKey: "description",
      header: "Título",
      cell: ({ row }) => <div>{row.getValue("description")}</div>,
      enableSorting: true,
   },
   {
      accessorKey: "deadlineSubmission",
      header: "Limite de Submissão",
      cell: ({ getValue }) => <FormattedDateCell value={getValue()} />,
   },
   {
      accessorKey: "typeOpportunity",
      header: "Tipo",
      cell: ({ getValue }) => {
         const type = getValue() as "SERVICO" | "MATERIAL";

         if (type === "MATERIAL") {
            return "Material";
         }

         return "Serviço";
      },
   },
   {
      accessorKey: "company",
      header: "Empresa",
      cell: ({ getValue }) => {
         const company = getValue() as { name: string; };
         const companyName = company?.name ?? "N/A";
         return companyName;
      },
   },
   {
      accessorKey: "isExpired",
      header: "Expirado?",
      cell: ({ getValue }) => {
         const expired = getValue() ? "Sim" : "Não";

         return (
            <Badge variant="secondary">{expired}</Badge>
         )
      } 
   },
   {
      accessorKey: "createdAt",
      header: "Visualizado em:",
      cell: ({ getValue }) => <FormattedDateCell value={getValue()} />,
   },
   {
      id: "actions",
      header: "",
      cell:(props) => <ActionsCell {...props} />,
   }
];
