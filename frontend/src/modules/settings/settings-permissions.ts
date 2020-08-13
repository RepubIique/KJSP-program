import { PermissionChecker } from '@/modules/user/permission-checker';
import Permissions from '@/security/permissions';

export class SettingsPermissions {
  edit: boolean;
  lockedForCurrentPlan: boolean;

  constructor(currentTenant, currentUser) {
    const permissionChecker = new PermissionChecker(
      currentTenant,
      currentUser,
    );

    this.edit = permissionChecker.match(
      Permissions.values.settingsEdit,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.settingsEdit,
    );
  }
}
