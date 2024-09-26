import { Opportunity } from "@/zodSchemas/opportunity";
import axios from "axios";

export const getOpportunities = async (): Promise<Opportunity[]> => {
   const { data } = await axios.get("/opportunities");
   return data;
};

export const getOpportunitiesById = async (
   opportunityId: string
): Promise<Opportunity> => {
   const { data } = await axios.get<Opportunity>(
      `/opportunities/${opportunityId}`
   );
   return data;
};

export const createOpportunity = async (
   newOpportunity: Omit<Opportunity, "id">
): Promise<Opportunity> => {
   const { data } = await axios.post<Opportunity>(
      "/opportunity",
      newOpportunity
   );
   return data;
};
