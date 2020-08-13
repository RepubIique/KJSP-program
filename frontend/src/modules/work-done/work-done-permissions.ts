import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class WorkDonePermissions {
  read: boolean;
  import: boolean;
  workDoneAutocomplete: boolean;
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
      Permissions.values.workDoneRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.workDoneImport,
    );
    this.workDoneAutocomplete = permissionChecker.match(
      Permissions.values.workDoneAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.workDoneCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.workDoneEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.workDoneDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.workDoneRead,
    );
  }
}
