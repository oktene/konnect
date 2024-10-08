import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CompanyService } from '../company/company.service';
import { UserRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UserService {
  constructor(private readonly usersRepo: UserRepository) {}

  async getAll() {
    return await this.usersRepo.findAll({});
  }

  async getOneById(userId: string) {
    const user = await this.usersRepo.findUnique({
      where: { id: userId },
      select: {
        name: true,
        phone: true,
        cpf: true,
        permissionLevel: true,
        role: true,
        company: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado!');
    }
    return user;
  }

  async getOneByEmail(userEmail: string) {
    return await this.usersRepo.findUnique({
      where: { email: userEmail },
    });
  }

  async update(userId: string, updateUserDto: UpdateUserDto) {
    return this.usersRepo.update({
      where: { id: userId },
      data: updateUserDto,
    });
  }

  async delete(companyId: string) {
    return await this.usersRepo.delete({ where: { id: companyId } });
  }
}
