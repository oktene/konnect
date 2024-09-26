"use client";

import { Button } from "@/components/ui/button";
import {
   Dialog,
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
import { Opportunity } from "@/zodSchemas/opportunity";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, ChevronLeft, ChevronRight, EyeIcon, MoreHorizontal, PencilIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";

export const columns: ColumnDef<Opportunity>[] = [
   {
      accessorKey: "codeRFQ",
      header: "RFQ Code",
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
      cell: ({ row }) => <div>{row.getValue("description")}</div>,
      enableSorting: true,
      enableHiding: false,
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
      cell: ({ getValue }) =>
         getValue()
            ? new Date(
                 getValue() as string | number | Date
              ).toLocaleDateString()
            : "N/A", // Format date if exists
   },
   {
      accessorKey: "deadlineSubmission",
      header: "Deadline Submission",
      cell: ({ getValue }) =>
         new Date(getValue() as string | number | Date).toLocaleDateString(), // Format date
   },
   {
      accessorKey: "typeOpportunity",
      header: "Type",
   },
   {
      accessorKey: "isExpired",
      header: "Expired",
      cell: ({ row, getValue }) => (getValue() ? "Sim" : "Não"), // Boolean handling
   },
   {
      id: "actions",
      header: "Ações",
      cell: ({ row }) => {
         const opportunity = row.original;
         const [isDialogOpen, setIsDialogOpen] = useState(false);

         const handleVisualizarClick = () => {
            setIsDialogOpen(true);
         };

         return (
            <>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button
                        className="h-8 w-8 p-0"
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                     >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Outras opções</span>
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                     <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={handleVisualizarClick}
                     >
                        <EyeIcon className="h-2 w-2 pr-2" />
                        Visualizar
                     </DropdownMenuItem>
                     <DropdownMenuItem className="hover:cursor-pointer">
                        <PencilIcon className="h-2 w-2 pr-2" /> 
                        Editar
                     </DropdownMenuItem>
                     <DropdownMenuItem className="hover:cursor-pointer">
                        <Trash2Icon className="h-2 w-2 pr-2" />
                        Deletar
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>

               <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogContent>
                     <DialogHeader>
                        <DialogTitle>
                           Oportunidade #{opportunity.codeRFQ}
                        </DialogTitle>
                        <DialogDescription>
                           Aqui estão os detalhes da oportunidade que você
                           selecionou.
                        </DialogDescription>
                        <Separator />
                        {/* Exemplo de campos que podem ser mostrados */}
                        <p>Detalhe 1: Informações adicionais...</p>
                        <p>Detalhe 2: Mais informações...</p>
                     </DialogHeader>
                     <DialogFooter>
                        <Button className="h-8 ph-2 pw-4" size="lg" variant="default">
                           Aplicar proposta
                           <ChevronRight
                              className="h-4 w-4 "
                           />
                        </Button>
                     </DialogFooter>
                  </DialogContent>
               </Dialog>
            </>
         );
      },
   },
   //   {
   //     accessorKey: "company.name",
   //     header: "Company",
   //   },
   //   {
   //     accessorKey: "subCategory.name",
   //     header: "SubCategory",
   //   },
   // {
   //   accessorKey: "createdAt",
   //   header: "Created At",
   //   cell: ({ getValue }) => new Date(getValue() as string | number | Date).toLocaleDateString(), // Format date
   // },
   // {
   //   accessorKey: "updatedAt",
   //   header: "Updated At",
   //   cell: ({ getValue }) => new Date(getValue() as string | number | Date).toLocaleDateString(), // Format date
   // },
];
