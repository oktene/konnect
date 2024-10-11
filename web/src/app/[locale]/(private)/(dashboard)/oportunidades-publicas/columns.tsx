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
import {
   ChevronRight,
   EyeIcon,
   Trash2Icon,
} from "lucide-react";
import { useState } from "react";

export type Opportunity = {
   id: string;
   codeRFQ: string;
   description: string;
   deadlineSubmission: Date;
   typeOpportunity: "Serviço" | "Material";
   isExpired: boolean;
   company: { id: string; name: string, companyRegistration: string };
   subCategory?: { id: string; name: string }[];
   attachments?: { id: string; filename: string; url: string }[];
   proposals?: { id: string; }[];
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
            <DataTableColumnHeader column={column} title="Título" />
         );
      },
      cell: ({ row }) => <div>{row.getValue("description")}</div>,
      enableSorting: true,
      enableHiding: false,
   },
   {
      accessorKey: "deadlineSubmission",
      header: ({ column }) => {
         return (
            <DataTableColumnHeader column={column} title="Limite de Submissão" />
         );
      },
      cell: ({ getValue }) =>
         new Date(getValue() as string | number | Date).toLocaleDateString(),
      enableSorting: true,
      enableHiding: false,
   },
   {
      accessorKey: "typeOpportunity",
      header: "Tipo",
   },
   {
      id: "company",
      accessorKey: "company.name",
      header: "Empresa",
      // cell: ({ row }) => <div>{row.getValue("description")}</div>,
   },
   // {
   //    accessorKey: "subCategory",
   //    header: "Categoria",
   //    cell: ({ getValue }) => {
   //       const categorias = getValue() as Array<{ name: string }>;
   //       console.log(categorias); 

   //       if (Array.isArray(categorias)) {
   //          return (
   //            <>
   //              {categorias.map((categoria, index) => (
   //                <span key={index}>{categoria.name.toString()}</span>
   //              ))}
   //            </>
   //          );
   //        }
      
   //        return null;
   //    }
   // },
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

         const handleClick = () => {
            setIsDialogOpen(false);
         };

         return (
            <>
               <Button
                  className="h-full w-85vw pw-2 ph-1"
                  aria-haspopup="true"
                  size="default"
                  variant="default"
                  onClick={handleVisualizarClick}
               >
                  <EyeIcon className="h-4 w-4 mr-2"/> 
                  Visualizar
                  <span className="sr-only">Visualizar oportunidade</span>
               </Button>
               <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogContent>
                     <DialogHeader>
                        <DialogTitle>
                           Oportunidade
                        </DialogTitle>
                        <DialogDescription>
                           Você acabou de visualizar essa oportunidade e os arquivos com detalhes das informações para envio de proposta acabaram de ser baixados em seu computador.
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
                           Entendi
                        </Button>
                     </DialogClose>
                        {/* <Button
                           className="h-8 ph-2 pw-2"
                           size="lg"
                           variant="default"
                           onClick={handleClick}
                        >
                           <Trash2Icon className="h-4 w-4 mr-2" />
                           Deletar
                        </Button> */}
                     </DialogFooter>
                  </DialogContent>
               </Dialog>
               {/* <DropdownMenu>
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
                        <EyeIcon className="h-3 mr-2" />
                        Visualizar
                     </DropdownMenuItem>
                     <DropdownMenuItem className="hover:cursor-pointer">
                        <PencilIcon className="h-3 mr-2" />
                        Editar
                     </DropdownMenuItem>
                     <DropdownMenuItem className="hover:cursor-pointer">
                        <Trash2Icon className="h-3 mr-2" />
                        Deletar
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu> */}
            </>
         );
      },
   },
];
