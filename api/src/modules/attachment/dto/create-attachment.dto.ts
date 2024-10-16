import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAttachmentDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  filePath: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  opportunityId: string;
}
