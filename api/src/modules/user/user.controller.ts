import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users in the Konnect' })
  async getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an user in the Konnect by ID' })
  async getOneById(@Param('id') userId: string) {
    return await this.userService.getOneById(userId);
  }

  @Get(':email')
  @ApiOperation({ summary: 'Get an user in the Konnect by Email' })
  async getOneByEmail(@Param('email') userEmail: string) {
    return this.userService.getOneByEmail(decodeURIComponent(userEmail));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an user' })
  async update(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(userId, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an user' })
  async remove(@Param('id') userId: string) {
    return await this.userService.delete(userId);
  }
}
