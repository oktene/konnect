
import { Opportunity } from "@/app/[locale]/(private)/(dashboard)/oportunidades-publicas/columns";
import { apiClient } from "../apiClient";

export type OpportunityType = {
   codeRFQ: string;
   description: string;
   deadlineSubmission: string;
   typeOpportunity: string;
   company?: {
      id: string;
      name: string;
      companyRegistration: string;
   }
   isExpired: boolean;
   attachments: {
      id: string;
      filename: string;
      url: string;
   }
 }

export interface GetOpportunitiesParams {
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

const opportunityService = {
   getOpportunities: async (): Promise<Opportunity[]> => {
      const { data } = await apiClient.get("/opportunity");
      return data;
   },

   getOpportunitiesById: async (
      opportunityId: string
   ): Promise<Opportunity> => {
      const { data } = await apiClient.get<Opportunity>(
         `/opportunity/${opportunityId}`
      );
      return data
   },

      getAllByCompanyId: async (
      companyId: string
   ): Promise<Opportunity> => {
      const { data } = await apiClient.get<Opportunity>(
         `/opportunity/${companyId}`
      );
      return data
   },

   createOpportunity: async (
      newOpportunity: Omit<Opportunity, "id">
   ): Promise<Opportunity> => {
      const { data } = await apiClient.post<Opportunity>(
         "/opportunity",
         newOpportunity
      );
      return data
   },
}

export default opportunityService;
