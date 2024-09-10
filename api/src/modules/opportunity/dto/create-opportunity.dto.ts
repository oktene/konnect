import { IsArray, IsBoolean, IsDate, IsDateString, IsEnum, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { TypeOpportunity } from "../../../shared/enums/typeOpportunity.enum";
import { Attachment } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { UUID } from "crypto";

export class CreateOpportunityDto {
  @IsNotEmpty()
  @IsString()
  codeRFQ: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber({}, { 
    message: 'Quantity must be a number',
  })
  quantity?: number;

  @IsOptional()
  @IsString()
  unityMetric?: string;

  @IsOptional()
  @IsDate()
  executionPeriod?: Date;

  @IsNotEmpty()
  @IsDate()
  deadlineSubmission: Date;

  @IsNotEmpty()
  @IsEnum(TypeOpportunity)
  typeOpportunity: TypeOpportunity;

  @IsOptional()
  @IsBoolean()
  isExpired: boolean;

  @IsOptional()
  @IsArray()
  attachments?: Attachment[];

  @IsUUID()
  companyId: string;

  @IsUUID()
  @IsNotEmpty()
  subCategoryId: string;
}
