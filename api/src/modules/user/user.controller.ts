import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PermissionsLevelsGuard } from 'src/shared/guards/permissionLevels.guard';
import { Permissions } from 'src/shared/decorators/permission.decorator';
import { PermissionLevel as UserPermission } from 'src/shared/enums/permissionLevel.enum';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
@UseGuards(PermissionsLevelsGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Permissions(UserPermission.EDITOR)
  @ApiOperation({ summary: 'Get all users in the Konnect' })
  async getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  @Permissions(UserPermission.EDITOR)
  @ApiOperation({ summary: 'Get an user in the Konnect by ID' })
  async getOneById(@Param('id') userId: string) {
    return await this.userService.getOneById(userId);
  }

  @Get(':email')
  @Permissions(UserPermission.EDITOR)
  @ApiOperation({ summary: 'Get an user in the Konnect by Email' })
  async getOneByEmail(@Param('email') userEmail: string) {
    return this.userService.getOneByEmail(decodeURIComponent(userEmail));
  }

  @Patch(':id')
  @Permissions(UserPermission.EDITOR || UserPermission.ADMIN || UserPermission.USER)
  @ApiOperation({ summary: 'Update an user' })
  async update(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(userId, updateUserDto);
  }

  @Delete(':id')
  @Permissions(UserPermission.EDITOR)
  @ApiOperation({ summary: 'Delete an user' })
  async remove(@Param('id') userId: string) {
    return await this.userService.delete(userId);
  }
}
