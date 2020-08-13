import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import { LocationField } from '@/modules/location/location-field';

function label(name) {
  return i18n(`entities.plantedArea.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  location: LocationField.relationToOne('location', label('location'), {}),
  block: new IntegerField('block', label('block'), {}),
  plantedHa: new DecimalField('plantedHa', label('plantedHa'), {}),
  totalPalm: new DecimalField('totalPalm', label('totalPalm'), {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  blockRange: new IntegerRangeField(
    'blockRange',
    label('blockRange'),
  ),
  plantedHaRange: new DecimalRangeField(
    'plantedHaRange',
    label('plantedHaRange'),
  ),
  totalPalmRange: new DecimalRangeField(
    'totalPalmRange',
    label('totalPalmRange'),
  ),
};

export class PlantedAreaModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
