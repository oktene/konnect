"use client";

import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import { TableCell } from "@/components/ui/table";
import { Opportunity } from "@/zodSchemas/opportunity";
import {
   DropdownMenu,
   DropdownMenuTrigger,
   DropdownMenuContent,
   DropdownMenuLabel,
   DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

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
      cell: ({ getValue }) => (getValue() ? "Sim" : "Não"), // Boolean handling
   },
   {
      id: "actions",
      header: "Ações",
      cell: () => {
         const [isDialogOpen, setIsDialogOpen] = useState(false);

         const handleVisualizarClick = () => {
            setIsDialogOpen(true);
         };

         return (
            <TableCell>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button
                        className="relative"
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                     >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Outras opções</span>
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                     <DropdownMenuLabel className="font-normal">
                        Ações
                     </DropdownMenuLabel>
                     <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={handleVisualizarClick}
                     >
                        Visualizar
                     </DropdownMenuItem>
                     <DropdownMenuItem className="hover:cursor-pointer">
                        Editar
                     </DropdownMenuItem>
                     <DropdownMenuItem className="hover:cursor-pointer">
                        Deletar
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>

               <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogContent>
                     <DialogHeader>
                        <DialogTitle>Detalhes da Oportunidade</DialogTitle>
                        <DialogDescription>
                           Aqui estão os detalhes da oportunidade que você
                           selecionou.
                        </DialogDescription>
                        {/* Exemplo de campos que podem ser mostrados */}
                        <p>Detalhe 1: Informações adicionais...</p>
                        <p>Detalhe 2: Mais informações...</p>
                     </DialogHeader>
                  </DialogContent>
               </Dialog>
            </TableCell>
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
