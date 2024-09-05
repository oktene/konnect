import { Injectable } from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  signin(signinDto: SigninDto) {
    return 'This action adds a new auth';
  }

  signup(signupnDto: SignupDto) {
    return 'This action adds a new auth';
  }
}
