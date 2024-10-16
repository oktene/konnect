"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import opportunityService, { OpportunityType } from "@/services/opportunity/opportunityService";
import { toast } from "./use-toast";
import { OpportunityWCompany } from "@/app/[locale]/(private)/contratantes/minhas-oportunidades/page";
import { Opportunity } from "@/app/[locale]/(private)/(dashboard)/oportunidades-publicas/columns";

export const useOpportunities = () => {
   const { data, isLoading, isError, error } = useQuery({
      queryKey: ["opportunities"],
      queryFn: async () => {
         const data = await opportunityService.getOpportunities();
         return data;
      },
   });

   return {
      data,
      isLoading,
      isError,
      error,
   };
};

export const useMyOpportunities = (companyId: string) => {
   const { data, isLoading, isError, error } = useQuery<OpportunityWCompany[]>({
      queryKey: ["opportunity", companyId],
      queryFn: async () => {
         if (!companyId) return [];
         return await opportunityService.getAllByCompanyId(companyId);
      },
      enabled: !!companyId,
   });

   return {
      data,
      isLoading,
      isError,
      error,
   };
}

export const useCreateOpportunity = () => {
   const queryClient = useQueryClient();

   const mutation = useMutation({
      mutationFn: (newOpportunity: Omit<Opportunity, "id">) => opportunityService.createOpportunity(newOpportunity),
      onSuccess: () => {
         // Invalida as queries para atualizar a lista de oportunidades após a exclusão
         queryClient.invalidateQueries({ queryKey: ["opportunity"] });
         toast({
            title: "Sucesso",
            description: "Oportunidade deletada com sucesso!",
            variant: "default",
         });
      },
      onError: (error: any) => {
         // Mostra uma mensagem de erro caso a deleção falhe
         console.error("Erro ao deletar a oportunidade:", error);
         toast({
            title: "Erro",
            description: "Falha ao deletar a oportunidade.",
            variant: "destructive",
         });
      },
   });

   return {
      mutate: mutation.mutate,
      isLoading: mutation.isIdle,
   };
};

export const useDeleteOpportunity = () => {
   const queryClient = useQueryClient();

   const mutation = useMutation<void, any, string>({
      mutationFn: async (opportunityId: string) => {
         await opportunityService.deleteOpportunity(opportunityId);
      },
      onSuccess: () => {
         // Invalida as queries para atualizar a lista de oportunidades após a exclusão
         queryClient.invalidateQueries({ queryKey: ["opportunity"] });
         toast({
            title: "Sucesso",
            description: "Oportunidade deletada com sucesso!",
            variant: "default",
         });
      },
      onError: (error: any) => {
         // Mostra uma mensagem de erro caso a deleção falhe
         console.error("Erro ao deletar a oportunidade:", error);
         toast({
            title: "Erro",
            description: "Falha ao deletar a oportunidade.",
            variant: "destructive",
         });
      },
   });

   return {
      mutate: mutation.mutate,
      isLoading: mutation.isIdle,
   };
};
