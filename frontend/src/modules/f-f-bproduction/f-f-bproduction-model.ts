import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { LocationField } from '@/modules/location/location-field';

function label(name) {
  return i18n(`entities.fFBproduction.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  date: new DateField('date', label('date'), {}),
  location: LocationField.relationToOne('location', label('location'), {}),
  mill: new StringField('mill', label('mill'), {}),
  block: new IntegerField('block', label('block'), {}),
  bunches: new DecimalField('bunches', label('bunches'), {}),
  mt: new DecimalField('mt', label('mt'), {}),
  looseFruit: new DecimalField('looseFruit', label('looseFruit'), {}),
  bunchWeight: new DecimalField('bunchWeight', label('bunchWeight'), {}),
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
  dateRange: new DateRangeField(
    'dateRange',
    label('dateRange'),
  ),
  blockRange: new IntegerRangeField(
    'blockRange',
    label('blockRange'),
  ),
  bunchesRange: new DecimalRangeField(
    'bunchesRange',
    label('bunchesRange'),
  ),
  mtRange: new DecimalRangeField(
    'mtRange',
    label('mtRange'),
  ),
  looseFruitRange: new DecimalRangeField(
    'looseFruitRange',
    label('looseFruitRange'),
  ),
  bunchWeightRange: new DecimalRangeField(
    'bunchWeightRange',
    label('bunchWeightRange'),
  ),
};

export class FFBproductionModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
