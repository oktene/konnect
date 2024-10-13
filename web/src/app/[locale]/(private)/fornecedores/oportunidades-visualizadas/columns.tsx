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
import { useToast } from "@/hooks/use-toast";
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
         const { toast } = useToast();   
         const opportunity = row.original;
         const [isDialogOpen, setIsDialogOpen] = useState(false);
         
         const handleClick = () => {
            setIsDialogOpen(false);
         };

         const handleVisualizarClick = () => {
            setIsDialogOpen(true);
            toast({
               title: "Sucesso",
               description: "Proposta desaplicada com sucesso.",
               variant: "default",
               });
            // Call your API to delete the opportunity
            // ...
         };

         return (
            <>
               <Button
                  className="h-full w-85vw pw-2 ph-1 bg-red-600 hover:bg-red-700"
                  aria-haspopup="true"
                  size="default"
                  variant="default"
                  onClick={handleVisualizarClick}
               >
                  <ArchiveXIcon className="h-4 w-4 mr-2"/> 
                  Desaplicar
                  <span className="sr-only">Excluir</span>
               </Button>

               <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogContent>
                     <DialogHeader>
                        <DialogTitle>
                           Tem certeza?
                        </DialogTitle>
                        <DialogDescription>
                           A proposta da sua empresa será removida da oportunidade.
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
                           onClick={handleClick}
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
