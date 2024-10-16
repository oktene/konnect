import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArchiveXIcon, EyeIcon, Trash2Icon } from "lucide-react";
import React, { useState } from "react";

//@ts-ignore
const ActionsCell = ({ row }) => {
   const { toast } = useToast();   
   const opportunity = row.original;
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   
   const handleClick = () => {
      setIsDialogOpen(false);
      toast({
         title: "Sucesso",
         description: "Proposta excluída com sucesso.",
         variant: "default",
         });
   };

   const handleVisualizarClick = () => {
      setIsDialogOpen(true);
      
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
            Excluir
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
};

export default ActionsCell;
