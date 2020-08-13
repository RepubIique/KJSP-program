import { AttendanceService } from '@/modules/attendance/attendance-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class AttendanceField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/attendance',
      Permissions.values.attendanceRead,
      AttendanceService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.type,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/attendance',
      Permissions.values.attendanceRead,
      AttendanceService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.type,
        };
      },
      options,
    );
  }
}
