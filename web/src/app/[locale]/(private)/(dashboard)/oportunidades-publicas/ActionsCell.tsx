import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { EyeIcon } from "lucide-react";
import React, { useState } from "react";

//@ts-ignore
const ActionsCell = ({ row }) => {
   const opportunity = row.original;
   const attachments = opportunity.attachments;
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
            <EyeIcon className="h-4 w-4 mr-2" />
            Visualizar
            <span className="sr-only">Visualizar oportunidade</span>
         </Button>
         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Oportunidade</DialogTitle>
                  <DialogDescription>
                     Você acabou de visualizar essa oportunidade e os arquivos
                     com detalhes das informações para envio de proposta
                     acabaram de ser baixados em seu computador.
                  </DialogDescription>
                  <Separator />
               </DialogHeader>
               <DialogContent>
                  <div>
                     Anexos
                     {attachments && (
                        <ul>
                            {/* @ts-ignore */}
                           {attachments.map((attachment, index) => (
                              <li key={index}>
                                 <a href={attachment.filePath} download={attachment.name}>
                                    {attachment.name}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     )}
                  </div>
               </DialogContent>
               <DialogFooter className="grid grid-flow-col">
                  <DialogClose asChild>
                     <Button className="h-8 ph-2 pw-2" size="lg" variant="secondary">
                        Entendi
                     </Button>
                  </DialogClose>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </>
   );
};

export default ActionsCell;
