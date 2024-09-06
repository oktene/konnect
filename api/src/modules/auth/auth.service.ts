import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UserRepository } from 'src/shared/database/repositories/users.repositories';
import { compare, hash } from 'bcrypt';
import { PermissionLevel } from './entities/PermissionLevel';
import { Role } from './entities/Role';
import { JwtService } from '@nestjs/jwt';
import { CompanyRepository } from 'src/shared/database/repositories/company.repositories';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepo: UserRepository,
    private readonly companiesRepo: CompanyRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = await this.usersRepo.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado!');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas!');
    }

    const accessToken = await this.generateAccessToken(
      user.id,
      user.permissionLevel as PermissionLevel,
      user.role as Role,
    );

    return { accessToken };
  }

  async signup(signupDto: SignupDto) {
    const {
      companyId,
      email,
      cpf,
      name,
      password,
      permissionLevel,
      phone,
      role,
    } = signupDto;

    //Verifica primeiro a existência da empresa
    const companyExists = await this.companiesRepo.findUnique({
      where: { id: companyId },
    });

    if (!companyExists) {
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

  //Função para gerar o JWT com as informações do usuário
  private async generateAccessToken(
    userId: string,
    permissionLevel: PermissionLevel,
    role: Role,
  ) {
    return await this.jwtService.signAsync({
      sub: userId,
      permissionLevel: permissionLevel,
      role: role,
    });
  }
}
