import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SigninDto } from './dto/sign-in.dto';
import { SignupDto } from './dto/sign-up.dto';
import { UserRepository } from 'src/shared/database/repositories/users.repositories';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CompanyRepository } from 'src/shared/database/repositories/company.repositories';
import { MailerService } from '@nestjs-modules/mailer';
import { v4 as uuidv4 } from 'uuid';
import { PermissionLevel } from 'src/shared/enums/permissionLevel.enum';
import { Role } from 'src/shared/enums/role.enum';
import { ResponseHandlerService } from 'src/shared/handlers/responseHandler.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepo: UserRepository,
    private readonly companiesRepo: CompanyRepository,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
    private readonly responseHandler: ResponseHandlerService
  ) {}

  async signIn(signInDto: SigninDto) {
    const { email, password } = signInDto;

    const userExists = await this.usersRepo.findUnique({
      where: { email },
    });

    if (!userExists) {
      throw new UnauthorizedException('Usuário não encontrado!');
    }

    const isPasswordValid = await compare(password, userExists.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas!');
    }

    const accessToken = await this.generateAccessToken(
      userExists.id,
      userExists.permissionLevel as PermissionLevel,
      userExists.role as Role,
    );

    return { accessToken };
  }

  async signUp(signUpDto: SignupDto) {
    const {
      companyId,
      email,
      cpf,
      name,
      password,
      permissionLevel,
      phone,
      role,
    } = signUpDto;

    //Verifica primeiro a existência da empresa
    const companyExists = await this.companiesRepo.findUnique({
      where: { id: companyId },
    });

    if (!companyExists) {
      return this.responseHandler.error(`The company doesn't exist`, 401);
      throw new NotFoundException('A empresa não existe.');
    }

    //Verifica se já existe um usuário com o mesmo email
    const isEmailTaken = await this.usersRepo.findUnique({
      where: { email },
      select: { id: true },
    });

    if (isEmailTaken) {
      throw new ConflictException('Email já cadastrado!');
    }

    //Cria a hash da senha
    const hashedPassword = await hash(password, 10);

    //Salva o usuário no banco de dados
    const user = await this.usersRepo.create({
      data: {
        name,
        email,
        password: hashedPassword,
        permissionLevel,
        phone,
        role,
        companyId,
        cpf,
      },
    });

    //cria um AccessToken usando os dados do usuário cadastrado
    const accessToken = await this.generateAccessToken(
      user.id,
      user.permissionLevel as PermissionLevel,
      user.role as Role,
    );

    return { accessToken };
  }

  async requestPasswordRecovery(email: string): Promise<void> {
    const user = await this.usersRepo.findByEmail(email);
    if (!user) {
      this.responseHandler.error('User not found', 401);
      // throw new BadRequestException('User not found');
    }

    const recoveryToken = uuidv4();
    const recoveryTokenExpires = new Date(Date.now() + 3600000); // Token expira em 1 hora

    await this.usersRepo.updateRecoveryToken(email, recoveryToken, recoveryTokenExpires);

    const recoveryLink = `http://your-app.com/reset-password?token=${recoveryToken}`;
    await this.mailerService.sendMail({
      to: email,
      subject: 'Password Recovery',
      template: './recovery',
      context: { recoveryLink },
    });
  }
  
  async resetPassword(token: string, newPassword: string): Promise<void> {
    const hasUserRecoveryToken = await this.usersRepo.findByRecoveryToken(token);

    if (!hasUserRecoveryToken) {
      throw new BadRequestException('Invalid or expired token');
    }

    const hashedPassword = await hash(newPassword, 10);
    await this.usersRepo.updatePassword(hasUserRecoveryToken.id, hashedPassword);
  }

  //Função para gerar o JWT com as informações do usuário
  private async generateAccessToken(userId: string, permissionLevel: PermissionLevel, role: Role) {
    return await this.jwtService.signAsync({
      sub: userId,
      permissionLevel: permissionLevel,
      role: role,
    });
  }
}