import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class sendMailDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  mensagem: string;
}