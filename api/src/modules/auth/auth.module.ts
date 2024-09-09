import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ResponseHandlerService } from 'src/shared/handlers/responseHandler.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '30d' },
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ResponseHandlerService],
})
export class AuthModule {}
