import { Address, Opportunity, Proposal, User } from "@prisma/client";

export class Company {
  id?:string;
  name:string;
  companyRegistration?:string;
  isInternational:boolean;
  about?:string;

  users?: User[];
  opportunities?: Opportunity[];
  proposals?: Proposal[];
  addresses?: Address[];
}
