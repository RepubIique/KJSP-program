import { LocationService } from '@/modules/location/location-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class LocationField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/location',
      Permissions.values.locationRead,
      LocationService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.location,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/location',
      Permissions.values.locationRead,
      LocationService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.location,
        };
      },
      options,
    );
  }
}
