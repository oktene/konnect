import { SetMetadata } from '@nestjs/common';
import { PermissionLevel } from '../enums/permissionLevel.enum';

export const PERMISSION_KEY = 'permissions';
export const Permission = (...permissions: PermissionLevel[]) =>
  SetMetadata(PERMISSION_KEY, permissions);