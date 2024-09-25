import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAttachmentDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  filePath: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  opportunityId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  proposalId: string;
}
