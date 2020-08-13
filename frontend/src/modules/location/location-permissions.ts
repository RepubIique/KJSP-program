import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class LocationPermissions {
  read: boolean;
  import: boolean;
  locationAutocomplete: boolean;
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
      Permissions.values.locationRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.locationImport,
    );
    this.locationAutocomplete = permissionChecker.match(
      Permissions.values.locationAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.locationCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.locationEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.locationDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.locationRead,
    );
  }
}
