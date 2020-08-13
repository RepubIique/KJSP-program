import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import StringField from '@/shared/fields/string-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';

function label(name) {
  return i18n(`entities.workCode.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  category: new StringField('category', label('category'), {}),
  type: new StringField('type', label('type'), {}),
  description: new StringField('description', label('description'), {}),
  uom: new StringField('uom', label('uom'), {}),
  rate: new DecimalField('rate', label('rate'), {}),
  remarks: new StringField('remarks', label('remarks'), {}),
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
  rateRange: new DecimalRangeField(
    'rateRange',
    label('rateRange'),
  ),
};

export class WorkCodeModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
