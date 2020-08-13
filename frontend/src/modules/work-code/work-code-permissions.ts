import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class WorkCodePermissions {
  read: boolean;
  import: boolean;
  workCodeAutocomplete: boolean;
  create: boolean;
  edit: boolean;
  destroy: boolean;
  lockedForCurrentPlan: boolean;

  constructor(currentTenant, currentUser) {
    const permissionChecker = new PermissionChecker(
      currentTenant,
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.workCodeRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.workCodeImport,
    );
    this.workCodeAutocomplete = permissionChecker.match(
      Permissions.values.workCodeAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.workCodeCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.workCodeEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.workCodeDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.workCodeRead,
    );
  }
}
