import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateProposalDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;

    @IsString()  
    @IsNotEmpty()
    @ApiProperty()
    companyApplicatorId: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    opportunityId: string;
}
