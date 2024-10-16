import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useDeleteOpportunity } from "@/hooks/useOpportunities";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ChevronRight, EyeIcon, MoreHorizontal, PencilIcon, Trash2Icon } from "lucide-react";
import React, { useState } from "react";

//@ts-ignore
const ActionsCell = ({ row }) => {
   const opportunity = row.original;
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [isDialogDeleteOpen, setIsDialogDeleteOpen] = useState(false);

   const handleVisualizarClick = () => {
      setIsDialogOpen(true);
   };
   const handleDeleteClick = () => {
      setIsDialogDeleteOpen(true);
   };

   const { mutate: deleteOpportunity, isLoading } =
      useDeleteOpportunity();

   const handleDeleteOpportunity = async (opportunityId: string) => {
      deleteOpportunity(opportunityId);
      setIsDialogDeleteOpen(false);
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
               <DropdownMenuItem className="hover:cursor-pointer">
                  <PencilIcon className="h-3 mr-2" />
                  Editar
               </DropdownMenuItem>
               <DropdownMenuItem
                  className="hover:cursor-pointer"
                  onClick={handleDeleteClick}
               >
                  <Trash2Icon className="h-3 mr-2" />
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
                  <Button
                     className="h-8 ph-2 pw-2"
                     size="lg"
                     variant="default"
                  >
                     Aplicar proposta
                     <ChevronRight className="h-4 w-4 " />
                  </Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>

         <Dialog
            open={isDialogDeleteOpen}
            onOpenChange={setIsDialogDeleteOpen}
         >
            <DialogContent
               onInteractOutside={(e) => {
                  e.preventDefault();
               }}
            >
               <DialogHeader>
                  <DialogTitle>Tem certeza?</DialogTitle>
                  <DialogDescription>
                     Sua oportunidade será deletada e não estará mais
                     publicamente disponível para visualização por
                     fornecedores.
                  </DialogDescription>
               </DialogHeader>
               <DialogFooter className="mt-3">
                  <DialogClose>
                    <Button
                      className="h-8 ph-2 pw-2"
                      size="lg"
                      variant="secondary"
                    >
                      Não
                    </Button>
                  </DialogClose>
                  <Button
                     className="h-8 ph-2 pw-2"
                     size="lg"
                     variant="destructive"
                     onClick={() =>
                        handleDeleteOpportunity(opportunity.id)
                     }
                  >
                     <Trash2Icon className="h-4 w-4 mr-2" />
                     Sim, deletar
                  </Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </>
   );
};

export default ActionsCell;
