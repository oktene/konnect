import axiosInstance from "@/config/axiosConfig";
import { Opportunity } from "@/zodSchemas/opportunity";

export const getOpportunities = async (): Promise<Opportunity[]> => {
   const { data } = await axiosInstance.get("/opportunities");
   return data;
};

export const getOpportunitiesById = async (
   opportunityId: string
): Promise<Opportunity> => {
   const { data } = await axiosInstance.get<Opportunity>(
      `/opportunities/${opportunityId}`
   );
   return data;
};

export const createOpportunity = async (
   newOpportunity: Omit<Opportunity, "id">
): Promise<Opportunity> => {
   const { data } = await axiosInstance.post<Opportunity>(
      "/opportunity",
      newOpportunity
   );
   return data;
};
