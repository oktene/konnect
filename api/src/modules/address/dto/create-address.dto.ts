import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Matches, IsOptional, IsEnum, MinLength, MaxLength, IsBoolean } from "class-validator";
import { $Enums } from "@prisma/client";

export class CreateAddressDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    street: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    city: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    state: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    neighborhood: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    zipCode: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    number: string;
  
    @IsEnum($Enums.Country)
    @IsNotEmpty()
    @ApiProperty({ enum: $Enums.Country})
    country: $Enums.Country;;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    isMatriz: boolean;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    companyId: string; 
}
