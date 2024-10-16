"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import opportunityService, { OpportunityType } from "@/services/opportunity/opportunityService";
import { toast } from "./use-toast";
import proposalService from "@/services/proposal/proposalService";
import { companyService } from "@/services/company/companyService";

export const useCompanies = () => {
   const { data, isLoading, isError, error } = useQuery({
      queryKey: ["company"],
      queryFn: async () => {
         const data = await companyService.getAllCompanies();
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

// export const useMyProposals = (companyId: string) => {
//    const { data, isLoading, isError, error } = useQuery<Proposal[]>({
//       queryKey: ["proposal/get-all/", companyId],
//       queryFn: async () => {
//          if (!companyId) return [];
//          return await proposalService.getAllByCompanyId(companyId);
//       },
//       enabled: !!companyId,
//    });

//    return {
//       data,
//       isLoading,
//       isError,
//       error,
//    };
// }

// export const useCreateOpportunity = () => {
//    const queryClient = useQueryClient();

//    const mutation = useMutation({
//       mutationFn: (newOpportunity: Omit<Opportunity, "id">) => opportunityService.createOpportunity(newOpportunity),
//       onSuccess: () => {
//          // Invalida as queries para atualizar a lista de oportunidades após a exclusão
//          queryClient.invalidateQueries({ queryKey: ["opportunity"] });
//          toast({
//             title: "Sucesso",
//             description: "Oportunidade deletada com sucesso!",
//             variant: "default",
//          });
//       },
//       onError: (error: any) => {
//          // Mostra uma mensagem de erro caso a deleção falhe
//          console.error("Erro ao deletar a oportunidade:", error);
//          toast({
//             title: "Erro",
//             description: "Falha ao deletar a oportunidade.",
//             variant: "destructive",
//          });
//       },
//    });

//    return {
//       mutate: mutation.mutate,
//       isLoading: mutation.isIdle,
//    };
// };

// export const useDeleteProposal = () => {
//    const queryClient = useQueryClient();

//    const mutation = useMutation<void, any, string>({
//       mutationFn: async (proposalId: string) => {
//          await proposalService.deleteProposal(proposalId);
//       },
//       onSuccess: () => {
//          // Invalida as queries para atualizar a lista de oportunidades após a exclusão
//          queryClient.invalidateQueries({ queryKey: ["proposal"] });
//          toast({
//             title: "Sucesso",
//             description: "Oportunidade deletada com sucesso!",
//             variant: "default",
//          });
//       },
//       onError: (error: any) => {
//          // Mostra uma mensagem de erro caso a deleção falhe
//          console.error("Erro ao deletar a oportunidade:", error);
//          toast({
//             title: "Erro",
//             description: "Falha ao deletar a oportunidade.",
//             variant: "destructive",
//          });
//       },
//    });

//    return {
//       mutate: mutation.mutate,
//       isLoading: mutation.isIdle,
//    };
// };
