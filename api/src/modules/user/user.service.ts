import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CompanyService } from '../company/company.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly companyService: CompanyService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | undefined> {
    const company = await this.companyService.getById(createUserDto.companyId);

    if (!company) {
      throw new NotFoundException('A empresa associada não existe.');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const userData: Prisma.UserCreateInput = {
      email: createUserDto.email,
      name: createUserDto.name,
      phone: createUserDto.phone,
      password: hashedPassword,
      company: { connect: { id: createUserDto.companyId } },
      permissionLevel: createUserDto.permissionLevel,
      role: createUserDto.role,
    };

    return this.prisma.user.create({
      data: userData,
    });
  }

  getAll() {
    return this.prisma.user.findMany();
  }

  async getOneById(id: string): Promise<User | undefined> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async getOneByEmail(email: string): Promise<User | undefined> {
    return this.prisma.user.findFirstOrThrow({
      where: { email },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
