import { Injectable } from '@nestjs/common';
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
    return await this.usersRepo.findUnique({ where: { id: userId } });
  }
  
  async getOneByEmail(userEmail: string) {
    return await this.usersRepo.findUnique({ where: { email: userEmail } });
  }
  
  async update(userId: string, updateUserDto: UpdateUserDto) {}

  async delete(companyId: string) {
    return await this.usersRepo.delete({ where: { id: companyId } });
  }
}
