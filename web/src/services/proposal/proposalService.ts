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
    // getOpportunities: async (): Promise<Opportunity[]> => {
    //    const { data } = await apiClient.get("/opportunities");
    //    return data;
    // },
 
    // getOpportunitiesById: async (
    //    opportunityId: string
    // ): Promise<Opportunity> => {
    //    const { data } = await apiClient.get<Opportunity>(
    //       `/opportunities/${opportunityId}`
    //    );
    //    return data
    // },
 
    // createOpportunity: async (
    //    newOpportunity: Omit<Opportunity, "id">
    // ): Promise<Opportunity> => {
    //    const { data } = await apiClient.post<Opportunity>(
    //       "/opportunity",
    //       newOpportunity
    //    );
    //    return data
    // },
 }
 
 export default proposalService;