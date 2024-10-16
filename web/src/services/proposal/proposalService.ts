
import { Proposal } from "@/hooks/useProposals";
import { apiClient } from "../apiClient";

export interface GetProposalsParams {
    codeRFQ: string;
    description: string;
    deadlineSubmission: string;
    typeOpportunity: string;
    isExpired: boolean;
    attachments: {
       id: string;
       filename: string;
       url: string;
    }
  }
 
 const proposalService = {
    getProposals: async (): Promise<Proposal[]> => {
       const { data } = await apiClient.get("/proposal");
       return data;
    },
 
   //  getProposalsById: async (
   //     opportunityId: string
   //  ): Promise<Opportunity> => {
   //     const { data } = await apiClient.get<Opportunity>(
   //        `/opportunities/${opportunityId}`
   //     );
   //     return data
   //  },

    getAllByCompanyId: async (companyId: string): Promise<Proposal[]> => {
      const { data } = await apiClient.get<Proposal[]>(`/opportunity/get-all/${companyId}`);
      return data || [];
    },
 
    // createOpportunity: async (
    //    newOpportunity: Omit<Opportunity, "id">
    // ): Promise<Opportunity> => {
    //    const { data } = await apiClient.post<Opportunity>(
    //       "/opportunity",
    //       newOpportunity
    //    );
    //    return data
    // },

    deleteProposal: async (proposalId: string): Promise<void> => {
      await apiClient.delete(`/proposal/${proposalId}`);
    },
 }
 
 export default proposalService;