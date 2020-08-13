import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class FfbPermissions {
  read: boolean;
  import: boolean;
  ffbAutocomplete: boolean;
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
      Permissions.values.ffbRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.ffbImport,
    );
    this.ffbAutocomplete = permissionChecker.match(
      Permissions.values.ffbAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.ffbCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.ffbEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.ffbDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.ffbRead,
    );
  }
}
