"use client";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import opportunityService from "@/services/opportunity/opportunityService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FileIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Opportunity } from "../../../(dashboard)/oportunidades-publicas/columns";

// Esquema de validação usando Zod
const TemporaryOpportunitySchema = z.object({
   codeRFQ: z.string(),
   description: z.string().min(1, "Descrição é obrigatória"),
   deadlineSubmission: z.string(),
   typeOpportunity: z.enum(["Serviço", "Material"]),
   isExpired: z.boolean(),
   company: z
      .object({
         id: z.string(),
         name: z.string(),
         companyRegistration: z.string(),
      })
      .optional(),
   attachments: z
      .array(
         z.object({
            id: z.string(),
            filename: z.string(),
            url: z.string(),
         })
      )
      .optional(),
});

export type TenporaryOpportunity = z.infer<typeof TemporaryOpportunitySchema>;

export function NewOportunityModal() {
   const queryClient = useQueryClient();

   const mutation = useMutation({
      mutationFn: (newOpportunity: Omit<Opportunity, "id">) => opportunityService.createOpportunity(newOpportunity),
      onSuccess: () => {
        // Invalida e refetch da lista de oportunidades
        queryClient.invalidateQueries({ queryKey: ["opportunity"] });
      },
   });

   const {
      handleSubmit: hookFormHandleSubmit,
      register,
      control,
      formState: { errors },
   } = useForm<TenporaryOpportunity>({
      resolver: zodResolver(TemporaryOpportunitySchema),
   });

   // Função para submeter o formulário
   // const onSubmit = (data: TenporaryOpportunity) => {
   //   mutation.mutate(data); // Chama a mutação para criar a oportunidade
   // };

   return (
      <Dialog modal>
         <DialogTrigger asChild>
            <Button variant="default">Nova Oportunidade</Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
               <DialogTitle>Nova Oportunidade</DialogTitle>
               <DialogDescription>
                  Preencha as informações da nova oportunidade.
               </DialogDescription>
            </DialogHeader>
            {/* <form onSubmit={hookFormHandleSubmit(onSubmit)}> */}
            <form>
               <div className="grid gap-4 py-4">
                  <Controller
                     control={control}
                     name="description"
                     render={({ field: { onChange, value } }) => (
                        <div className="grid grid-cols-4 items-center gap-4">
                           <Label htmlFor="description" className="text-right">
                              Título
                           </Label>
                           <Input
                              id="description"
                              placeholder="Descrição"
                              className="col-span-3"
                              value={value}
                              onChange={onChange}
                           />
                           {errors.description && (
                              <p>{errors.description.message}</p>
                           )}
                        </div>
                     )}
                  />
                  <Controller
                     control={control}
                     name="typeOpportunity"
                     render={({ field: { onChange, value } }) => (
                        <div className="grid grid-cols-4 items-center gap-4">
                           <Label
                              htmlFor="typeOpportunity"
                              className="text-right"
                           >
                              Tipo
                           </Label>
                           <Select onValueChange={onChange} value={value}>
                              <SelectTrigger className="col-span-3">
                                 <SelectValue placeholder="Selecione um tipo" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectGroup>
                                    <SelectItem value="Serviço">
                                       Serviço
                                    </SelectItem>
                                    <SelectItem value="Material">
                                       Material
                                    </SelectItem>
                                 </SelectGroup>
                              </SelectContent>
                           </Select>
                           {errors.typeOpportunity && (
                              <p>{errors.typeOpportunity.message}</p>
                           )}
                        </div>
                     )}
                  />
                  <Controller
                     control={control}
                     name="deadlineSubmission"
                     render={({ field: { onChange, value } }) => (
                        <div className="grid grid-cols-4 items-center gap-4">
                           <Label
                              htmlFor="deadlineSubmission"
                              className="text-right"
                           >
                              Limite de Submissão
                           </Label>
                           <Input
                              type="date"
                              value={value?.toString().split("T")[0]}
                              onChange={onChange}
                           />
                           {errors.deadlineSubmission && (
                              <p>{errors.deadlineSubmission.message}</p>
                           )}
                        </div>
                     )}
                  />
               </div>
               <DialogFooter>
                  {/* <Button type="submit" disabled={isLoading}>
                     {isLoading ? "Salvando..." : "Salvar Alterações"}
                  </Button> */}
                  <Button type="submit">
                     Salvar Alterações
                  </Button>
               </DialogFooter>
               {/* {isError && <p>Erro ao salvar a oportunidade</p>} */}
            </form>
         </DialogContent>
      </Dialog>
   );
}
