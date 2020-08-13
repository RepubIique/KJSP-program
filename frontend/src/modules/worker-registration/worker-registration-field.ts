import { WorkerRegistrationService } from '@/modules/worker-registration/worker-registration-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class WorkerRegistrationField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/worker-registration',
      Permissions.values.workerRegistrationRead,
      WorkerRegistrationService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.name,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/worker-registration',
      Permissions.values.workerRegistrationRead,
      WorkerRegistrationService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.name,
        };
      },
      options,
    );
  }
}
