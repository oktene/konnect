import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
    
    @IsNotEmpty()
    nameCategory: string;
    
}
