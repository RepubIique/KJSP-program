import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class DeductionPermissions {
  read: boolean;
  import: boolean;
  deductionAutocomplete: boolean;
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
      Permissions.values.deductionRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.deductionImport,
    );
    this.deductionAutocomplete = permissionChecker.match(
      Permissions.values.deductionAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.deductionCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.deductionEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.deductionDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.deductionRead,
    );
  }
}
