import { IsArray, IsBoolean, IsDate, IsDateString, IsEnum, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { TypeOpportunity } from "../../../shared/enums/typeOpportunity.enum";
import { Attachment } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { UUID } from "crypto";

export class CreateOpportunityDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  codeRFQ: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @IsOptional()
  @IsNumber({}, { 
    message: 'Quantity must be a number',
  })
  @ApiProperty()
  quantity?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  unityMetric?: string;

  @IsOptional()
  @IsDate()
  @ApiProperty()
  executionPeriod?: Date;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  deadlineSubmission: Date;

  @IsNotEmpty()
  @IsEnum(TypeOpportunity)
  @ApiProperty()
  typeOpportunity: TypeOpportunity;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  isExpired: boolean;

  @IsOptional()
  @IsArray()
  @ApiProperty()
  attachments?: Attachment[];

  @IsUUID()
  @ApiProperty()
  companyId: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  subCategoryId: string;
}
