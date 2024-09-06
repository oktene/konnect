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
    return await this.userService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an user in the Konnect by ID' })
  async getOneById(@Param('id') id: string) {
    return this.userService.getOneById(id);
  }

  @Get(':email')
  @ApiOperation({ summary: 'Get an user in the Konnect by Email' })
  async getOneByEmail(@Param('email') email: string) {
    return this.userService.getOneByEmail(decodeURIComponent(email));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an user' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an user' })
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
