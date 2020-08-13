import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class WorkerRegistrationPermissions {
  read: boolean;
  import: boolean;
  workerRegistrationAutocomplete: boolean;
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
      Permissions.values.workerRegistrationRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.workerRegistrationImport,
    );
    this.workerRegistrationAutocomplete = permissionChecker.match(
      Permissions.values.workerRegistrationAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.workerRegistrationCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.workerRegistrationEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.workerRegistrationDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.workerRegistrationRead,
    );
  }
}
