import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class PlantedAreaPermissions {
  read: boolean;
  import: boolean;
  plantedAreaAutocomplete: boolean;
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
      Permissions.values.plantedAreaRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.plantedAreaImport,
    );
    this.plantedAreaAutocomplete = permissionChecker.match(
      Permissions.values.plantedAreaAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.plantedAreaCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.plantedAreaEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.plantedAreaDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.plantedAreaRead,
    );
  }
}
