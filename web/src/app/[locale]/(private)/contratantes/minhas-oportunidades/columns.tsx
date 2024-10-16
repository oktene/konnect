"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell } from "@/components/ui/table";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import {
   ArrowUpDown,
   ChevronLeft,
   ChevronRight,
   EyeIcon,
   MoreHorizontal,
   PencilIcon,
   Trash2Icon,
} from "lucide-react";
import { useState } from "react";
import { useDeleteOpportunity } from "@/hooks/useOpportunities";
import Link from "next/link";
import { DataTable } from "./data-table";
import { format } from "date-fns";
import ActionsCell from "./ActionsCell";
import ProposalsCell from "./ProposalsCell";

export type Opportunity = {
   id: string;
   codeRFQ: string;
   description: string;
   deadlineSubmission: Date;
   typeOpportunity: "Serviço" | "Material";
   isExpired: boolean;
   subCategory?: { id: string; name: string }[];
   attachments?: { id: string; filename: string; url: string }[];
   proposals?: Proposal[];
};

export type Proposal = {
   appliedBy: AppliedBy;
   appliedAt: Date;
};

export type AppliedBy = {
   users: {
      email: string;
      company: {
         name: string;
      };
   }[];
};

//@ts-ignore
const FormattedDateCell = ({ value }) => {
   const date = new Date(value as string | number | Date);
   const formattedDate = format(date, 'dd/MM/yyyy à HH:mm');
   
   return <span>{formattedDate}</span>;
};

export const columns: ColumnDef<Opportunity>[] = [
   {
      accessorKey: "id",
      header: ({ column }) => {
         return column.toggleVisibility(false);
      },
      enableHiding: true,
   },
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
      accessorKey: "isExpired",
      header: "Expirado?",
      cell: ({ getValue }) => {
         const expired = getValue() ? "Sim" : "Não";

         return <Badge variant="secondary">{expired}</Badge>;
      },
   },
   {
      id: "proposals",
      accessorKey: "proposals",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               Visualizações
               <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
         );
      },
      cell: (props) => <ProposalsCell {...props} />,
   },
   {
      id: "actions",
      header: "",
      cell: (props) => <ActionsCell {...props} />,
   },
];
