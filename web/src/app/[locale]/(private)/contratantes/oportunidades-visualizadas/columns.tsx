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
import { Opportunity } from "@/zodSchemas/opportunity";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import {
   ArchiveXIcon,
   ArrowUpDown,
   ChevronRight,
   Trash2Icon,
} from "lucide-react";
import { useState } from "react";

export const demandas: ColumnDef<Opportunity>[] = [
   {
      accessorKey: "codeRFQ",
      header: "Código RFQ",
   },
   {
      accessorKey: "description",
      header: ({ column }) => {
         return (
            <DataTableColumnHeader column={column} title="Título" />
         );
      },
      cell: ({ row }) => <div>{row.getValue("description")}</div>
   },
   {
      accessorKey: "executionPeriod",
      header: "Período de Execução",
      cell: ({ getValue }) =>
         getValue()
            ? new Date(
                 getValue() as string | number | Date
              ).toLocaleDateString()
            : "N/A", // Format date if exists
   },
   {
      accessorKey: "deadlineSubmission",
      header: "Limite de Submissão",
      cell: ({ getValue }) =>
         new Date(getValue() as string | number | Date).toLocaleDateString(),
   },
   {
      accessorKey: "typeOpportunity",
      header: "Tipo",
   },
   {
      accessorKey: "company",
      header: "Empresa",
   },
   {
      accessorKey: "subCategory",
      header: "Categoria",
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
      id: "actions",
      header: "",
      cell: ({ row }) => {
         const opportunity = row.original;
         const [isDialogOpen, setIsDialogOpen] = useState(false);

         const handleVisualizarClick = () => {
            setIsDialogOpen(true);
         };

         return (
            <>
               <Button
                  className="h-full w-85vw pw-2 ph-1 bg-orange-500 hover:bg-orange-600"
                  aria-haspopup="true"
                  size="default"
                  variant="default"
                  onClick={handleVisualizarClick}
               >
                  <ArchiveXIcon className="h-4 w-4 mr-2"/> 
                  Desaplicar
                  <span className="sr-only">Desaplicar</span>
               </Button>

               <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogContent>
                     <DialogHeader>
                        <DialogTitle>
                           Tem certeza?
                        </DialogTitle>
                        <DialogDescription>
                           A proposta da sua empresa será removida da oportunidade da empresa.
                        </DialogDescription>
                        <Separator />
                     </DialogHeader>
                     <DialogFooter className="grid grid-flow-col">
                     <DialogClose asChild>
                        <Button
                           className="h-8 ph-2 pw-2"
                           size="lg"
                           variant="secondary"
                        >
                           Cancelar
                        </Button>
                     </DialogClose>
                        <Button
                           className="h-8 ph-2 pw-2"
                           size="lg"
                           variant="default"
                        >
                           <Trash2Icon className="h-4 w-4 mr-2" />
                           Deletar
                        </Button>
                     </DialogFooter>
                  </DialogContent>
               </Dialog>
            </>
         );
      },
   },
];
