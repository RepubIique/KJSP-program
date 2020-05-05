import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import IntegerField from 'modules/shared/fields/integerField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import DecimalRangeField from 'modules/shared/fields/decimalRangeField';
import DecimalField from 'modules/shared/fields/decimalField';
import DateField from 'modules/shared/fields/dateField';
import DateRangeField from 'modules/shared/fields/dateRangeField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.ffb.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.ffb.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  date: new DateField('date', label('date'), {}),
  estate: new RelationToOneField('estate', label('estate'), {}),
  subdivision: new RelationToOneField('subdivision', label('subdivision'), {}),
  mill: new RelationToOneField('mill', label('mill'), {}),
  fFBTonnageMT: new DecimalField('fFBTonnageMT', label('fFBTonnageMT'), {}),
  month: new EnumeratorField('month', label('month'), [
    { id: 'January', label: enumeratorLabel('month', 'January') },
    { id: 'February', label: enumeratorLabel('month', 'February') },
    { id: 'March', label: enumeratorLabel('month', 'March') },
    { id: 'April', label: enumeratorLabel('month', 'April') },
    { id: 'May', label: enumeratorLabel('month', 'May') },
    { id: 'June', label: enumeratorLabel('month', 'June') },
    { id: 'July', label: enumeratorLabel('month', 'July') },
    { id: 'August', label: enumeratorLabel('month', 'August') },
    { id: 'September', label: enumeratorLabel('month', 'September') },
    { id: 'October', label: enumeratorLabel('month', 'October') },
    { id: 'November', label: enumeratorLabel('month', 'November') },
    { id: 'December', label: enumeratorLabel('month', 'December') },
  ],{}),
  year: new StringField('year', label('year'), {}),
  company: new StringField('company', label('company'), {}),
  millticketNo: new StringField('millticketNo', label('millticketNo'), {}),
  sealNo: new IntegerField('sealNo', label('sealNo'), {}),
  deliverynoteno: new IntegerField('deliverynoteno', label('deliverynoteno'), {}),
  lorryNo: new StringField('lorryNo', label('lorryNo'), {}),
  block: new RelationToOneField('block', label('block'), {}),
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
  fFBTonnageMTRange: new DecimalRangeField(
    'fFBTonnageMTRange',
    label('fFBTonnageMTRange'),
  ),
  sealNoRange: new IntegerRangeField(
    'sealNoRange',
    label('sealNoRange'),
  ),
  deliverynotenoRange: new IntegerRangeField(
    'deliverynotenoRange',
    label('deliverynotenoRange'),
  ),
};

export default {
  fields,
};
