import { PermissionChecker } from '@/modules/user/permission-checker';
import Permissions from '@/security/permissions';

export class PlanPermissions {
  read: boolean;
  edit: boolean;
  lockedForCurrentPlan: boolean;

  constructor(currentTenant, currentUser) {
    const permissionChecker = new PermissionChecker(
      currentTenant,
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.planRead,
    );

    this.edit = permissionChecker.match(
      Permissions.values.planEdit,
    );

    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.planRead,
    );
  }
}
