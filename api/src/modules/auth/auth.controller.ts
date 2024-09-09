import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/shared/decorators/isPublic';

@ApiBearerAuth()
@ApiTags('User')
@Controller('auth')
@IsPublic()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Create an user' })
  @ApiBody({ type: SignupDto })
  create(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @ApiOperation({ summary: 'Authenticate a user' })
  @ApiBody({ type: SignupDto })
  @Post('signin')
  authenticate(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }
}
