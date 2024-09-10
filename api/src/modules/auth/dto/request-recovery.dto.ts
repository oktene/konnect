import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RequestRecoveryDto {
    @IsString({ message: 'O Email precisa ser uma String!' })
    @IsNotEmpty({ message: 'O Email é obrigatório!' })
    @IsEmail()
    @ApiProperty()
    email: string;
}