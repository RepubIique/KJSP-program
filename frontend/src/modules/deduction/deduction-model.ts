import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { DeductionField } from '@/modules/deduction/deduction-field';
import { LocationField } from '@/modules/location/location-field';

function label(name) {
  return i18n(`entities.deduction.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  worker: DeductionField.relationToOne('worker', label('worker'), {}),
  bf: new DecimalField('bf', label('bf'), {}),
  credit: new DecimalField('credit', label('credit'), {}),
  deduction: new DecimalField('deduction', label('deduction'), {}),
  cf: new DecimalField('cf', label('cf'), {}),
  date: new DateField('date', label('date'), {}),
  location: LocationField.relationToOne('location', label('location'), {}),
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
  bfRange: new DecimalRangeField(
    'bfRange',
    label('bfRange'),
  ),
  creditRange: new DecimalRangeField(
    'creditRange',
    label('creditRange'),
  ),
  deductionRange: new DecimalRangeField(
    'deductionRange',
    label('deductionRange'),
  ),
  cfRange: new DecimalRangeField(
    'cfRange',
    label('cfRange'),
  ),
  dateRange: new DateRangeField(
    'dateRange',
    label('dateRange'),
  ),
};

export class DeductionModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
