import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArchiveXIcon, EyeIcon, Link, Trash2Icon } from "lucide-react";
import React, { useState } from "react";
import { AppliedBy, Proposal } from "./columns";
import { DataTable } from "./data-table";

//@ts-ignore
const ProposalsCell = ({ row }) => {
   const proposals = row.getValue("proposals") as Proposal[] | undefined;
   console.log(proposals);
   const opportunity = row.original;
   const visualizations = proposals ? proposals.length : 0;
   const [isDialogOpen, setIsDialogOpen] = useState(false);

   const handleVisualizarClick = () => {
      setIsDialogOpen(true);
   };

   const columns: ColumnDef<Proposal>[] = [
    {
      accessorKey: "appliedBy",
      header: "Empresa",
      cell: ({ getValue }) => {
        const appliedBy = getValue() as AppliedBy;
        const companyName = appliedBy?.users?.[0]?.company?.name ?? "N/A";
        return companyName;
      },
    },
    {
      accessorKey: "appliedBy",
      header: "Email",
      cell: ({ getValue }) => {
        const appliedBy = getValue() as AppliedBy;
        const email = appliedBy?.users?.[0]?.email ?? "N/A";
        return email;
      },
    },
    {
      accessorKey: "appliedAt",
      header: "Visualizado em",
      cell: ({ getValue }) => {
         const date = new Date(getValue() as string | number | Date)
         const formatedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} às ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
         return formatedDate;
      },
    },
   ];

   const data = proposals?.map((proposal) => ({
    appliedBy: {
      users: proposal.appliedBy?.users ?? [{ email: "N/A", company: { name: "N/A" } }],
    },
    appliedAt: proposal.appliedAt,
  })) || [];

   return (
      <>
         <Button variant="link" onClick={handleVisualizarClick}>
            <Link
               className="flex justify-center items-center sub"
               href={""}
            >
               <EyeIcon className="h-3 mr-1" />
               {visualizations}
            </Link>
         </Button>

         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} modal>
            <DialogContent className="max-w-fit">
               <DialogHeader>
                  <DialogTitle>
                     Visualizações da Oportunidade #{opportunity.codeRFQ}
                  </DialogTitle>
                  <DialogDescription>
                     Aqui estão os detalhes das visualizações na
                     oportunidade selecionada.
                     <DataTable columns={columns} data={data} />
                  </DialogDescription>
               </DialogHeader>
            </DialogContent>
         </Dialog>
      </>
   );
};

export default ProposalsCell;
