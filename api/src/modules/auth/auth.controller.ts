import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/shared/decorators/isPublic';
import { ResponseHandlerService } from 'src/shared/handlers/responseHandler.service';

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
      const user = this.authService.signup(signupDto);
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
    return this.authService.signin(signinDto);
  }
}
