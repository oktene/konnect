import { Controller, Post, Body, HttpException, HttpStatus, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/sign-up.dto';
import { SigninDto } from './dto/sign-in.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/shared/decorators/isPublic.decorator';
import { ResponseHandlerService } from 'src/shared/handlers/responseHandler.service';
import { RequestRecoveryDto } from './dto/request-recovery.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

@IsPublic()
@ApiTags('Auth')
@Controller('')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly responseHandler: ResponseHandlerService
  ) { }

  @Post('sign-up')
  @ApiOperation({ summary: 'Register an user' })
  @ApiBody({ type: SignupDto })
  @ApiResponse({ status: 201, description: 'The user and company has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 403, description: `You don't have permission to access '/signUp' on the server.` })
  async signUp(@Body() signupDto: SignupDto) {
    try {
      const user = this.authService.signUp(signupDto);
      return this.responseHandler.success(user, 'User registered successfully');
    } catch (error) {
      return this.responseHandler.error('Authentication failed', 401);
      throw new HttpException('Registration failed', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('sign-in')
  @ApiOperation({ summary: 'Authenticate an user' })
  @ApiBody({ type: SigninDto })
  @ApiResponse({ status: 201, description: 'The user and company has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 403, description: `You don't have permission to access '/signIn' on the server.` })
  signIn(@Body() signinDto: SigninDto) {
    return this.authService.signIn(signinDto);
  }

  @Post('password-recovery')
  @ApiOperation({ summary: `Recovery the user's password` })
  @ApiBody({ type: RequestRecoveryDto })
  async requestPasswordRecovery(@Body() requestRecoveryDto: RequestRecoveryDto) {
    await this.authService.requestPasswordRecovery(requestRecoveryDto.email);
    return { message: 'Recovery email sent' };
  }

  @Post('reset-password')
  @ApiOperation({ summary: 'Reset the password' })
  @ApiBody({ type: ResetPasswordDto })
  async resetPassword(@Query('token') token: string, @Body() resetPasswordDto: ResetPasswordDto) {
    await this.authService.resetPassword(token, resetPasswordDto.newPassword);
    return { message: 'Password has been reset' };
  }
}
