import { FFBproductionService } from '@/modules/f-f-bproduction/f-f-bproduction-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class FFBproductionField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/f-f-bproduction',
      Permissions.values.fFBproductionRead,
      FFBproductionService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.mill,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/f-f-bproduction',
      Permissions.values.fFBproductionRead,
      FFBproductionService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.mill,
        };
      },
      options,
    );
  }
}
