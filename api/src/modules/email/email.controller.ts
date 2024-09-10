import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailService } from './email.service';
import { sendMailDto } from './dto/send-mail.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Email')
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('enviar-email')
  async sendEmail(@Body() sendEmailDto: sendMailDto) {
    const { email, mensagem } = sendEmailDto;
    return await this.emailService.sendEmail(email, mensagem);
  }

}
