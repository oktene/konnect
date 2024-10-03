import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
   getOpportunities,
   createOpportunity,
} from "../services/opportunity/opportunityService";
import { Opportunity } from "@/zodSchemas/opportunity";

export const useOpportunities = () => {
   return useQuery<Opportunity[]>({
      queryKey: ["opportunity"],
      queryFn: getOpportunities,
      staleTime: 1000 * 60 * 5,
   });
};

export const useCreateOpportunity = () => {
   const queryClient = useQueryClient();

   // return useMutation<Opportunity, Error, Omit<Opportunity, "id">>(
   //    createOpportunity, // Chama a função que utiliza axios
   //    {
   //       onSuccess: () => {
   //          // Invalida e refaz a query para oportunidades após criar uma nova
   //          queryClient.invalidateQueries({ queryKey: ["opportunity"] });
   //       },
   //    }
   // );
};
