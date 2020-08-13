import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class FFBproductionPermissions {
  read: boolean;
  import: boolean;
  fFBproductionAutocomplete: boolean;
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
      Permissions.values.fFBproductionRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.fFBproductionImport,
    );
    this.fFBproductionAutocomplete = permissionChecker.match(
      Permissions.values.fFBproductionAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.fFBproductionCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.fFBproductionEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.fFBproductionDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.fFBproductionRead,
    );
  }
}
