import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class AttendancePermissions {
  read: boolean;
  import: boolean;
  attendanceAutocomplete: boolean;
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
      Permissions.values.attendanceRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.attendanceImport,
    );
    this.attendanceAutocomplete = permissionChecker.match(
      Permissions.values.attendanceAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.attendanceCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.attendanceEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.attendanceDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.attendanceRead,
    );
  }
}
