import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(email: string, message: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'KONNECT - Recovery password',
      text: message,
    });
  }
}
