"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import {
   ArrowUpDown,
   ChevronRight,
   EyeIcon,
   Trash2Icon,
} from "lucide-react";
import { useState } from "react";
import ActionsCell from "./ActionsCell";

export type Opportunity = {
   id: string;
   codeRFQ: string;
   description: string;
   deadlineSubmission: Date;
   typeOpportunity: "Serviço" | "Material";
   isExpired: boolean;
   company: { id: string; name: string, companyRegistration: string };
   subCategory?: { id: string; name: string }[];
   attachments?: { id: string; name: string; filePath: string }[];
   proposals?: { id: string; }[];
 };

 //@ts-ignore
const FormattedDateCell = ({ value }) => {
   const date = new Date(value as string | number | Date);
   const formattedDate = format(date, 'dd/MM/yyyy à HH:mm');
   
   return <span>{formattedDate}</span>;
};

export const columns: ColumnDef<Opportunity>[] = [
   {
      accessorKey: "codeRFQ",
      header: "Código RFQ",
   },
   {
      accessorKey: "description",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               Título
               <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
         );
      },
      enableSorting: true,
      enableHiding: false,
   },
   {
      accessorKey: "deadlineSubmission",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               Limite de Submissão
               <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
         );
      },
      cell: ({ getValue }) => <FormattedDateCell value={getValue()} />,
      enableSorting: true,
      enableHiding: false,
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
      id: "company",
      accessorKey: "company.name",
      header: "Empresa",
   },
   {
      accessorKey: "isExpired",
      header: "Expirado?",
      cell: ({ getValue } ) => {
         const expired = getValue() ? "Sim" : "Não";

         return (
            <Badge variant="secondary">{expired}</Badge>
         )
      } 
   },
   {
      id: "actions",
      header: "",
      cell: (props) => <ActionsCell {...props} />,
   },
];
