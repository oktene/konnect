import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSION_KEY } from '../decorators/permission.decorator';
import { PermissionLevel } from '../enums/permissionLevel.enum';


@Injectable()
export class PermissionsLevelsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.get<PermissionLevel[]>(PERMISSION_KEY, context.getHandler());
    if (!requiredPermissions) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // Supondo que você tem o usuário no request

    if (!user || !requiredPermissions.some(permission => user.permissions.includes(permission))) {
      throw new ForbiddenException('You do not have the required permissions to access this resource');
    }

    return true;
  }
}