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
import { WorkerRegistrationField } from '@/modules/worker-registration/worker-registration-field';

function label(name) {
  return i18n(`entities.workDone.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  location: LocationField.relationToOne('location', label('location'), {}),
  date: new DateField('date', label('date'), {}),
  worker: WorkerRegistrationField.relationToOne('worker', label('worker'), {}),
  block: new IntegerField('block', label('block'), {}),
  quantity: new DecimalField('quantity', label('quantity'), {}),
  remarks: new StringField('remarks', label('remarks'), {}),
  amount: new DecimalField('amount', label('amount'), {}),
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
  quantityRange: new DecimalRangeField(
    'quantityRange',
    label('quantityRange'),
  ),
  amountRange: new DecimalRangeField(
    'amountRange',
    label('amountRange'),
  ),
};

export class WorkDoneModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
