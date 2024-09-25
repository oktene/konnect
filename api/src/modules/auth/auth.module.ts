import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ResponseHandlerService } from 'src/shared/handlers/responseHandler.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { TransportOptions } from 'nodemailer';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '30d' },
      secret: process.env.JWT_SECRET,
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.example.com',
        port: 587,
        secure: false, // true para 465, false para outras portas
        auth: {
          user: 'username',
          pass: 'password',
        },
      } as TransportOptions,
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ResponseHandlerService],
})
export class AuthModule {}
