import { PlantedAreaService } from '@/modules/planted-area/planted-area-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class PlantedAreaField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/planted-area',
      Permissions.values.plantedAreaRead,
      PlantedAreaService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/planted-area',
      Permissions.values.plantedAreaRead,
      PlantedAreaService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}
