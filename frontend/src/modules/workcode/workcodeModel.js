import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import DecimalRangeField from 'modules/shared/fields/decimalRangeField';
import DecimalField from 'modules/shared/fields/decimalField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.workcode.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  accCode: new StringField('accCode', label('accCode'), {}),
  workCategory: new StringField('workCategory', label('workCategory'), {}),
  typeofWork: new StringField('typeofWork', label('typeofWork'), {}),
  workDescription: new StringField('workDescription', label('workDescription'), {}),
  rate: new DecimalField('rate', label('rate'), {}),
  uom: new RelationToOneField('uom', label('uom'), {}),
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

export default {
  fields,
};
