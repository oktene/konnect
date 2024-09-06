import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CompanyService } from '../company/company.service';

@Injectable()
export class UserService {
  constructor(private readonly companyService: CompanyService) {}

  getAll() {
    //return this.prisma.user.findMany();
  }

  async getOneById(id: string) {
    return 'one user';
  }

  async getOneByEmail(email: string) {
    return 'one user';
  }

  async update(userId: string, updateUserDto: UpdateUserDto) {}

  async remove(id: string) {}
}
