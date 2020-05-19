import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import IntegerField from 'modules/shared/fields/integerField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import DecimalRangeField from 'modules/shared/fields/decimalRangeField';
import DecimalField from 'modules/shared/fields/decimalField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.checkroll.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.checkroll.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  workerID: new RelationToOneField('workerID', label('workerID'), {}),
  workcode: new RelationToOneField('workcode', label('workcode'), {}),
  no: new IntegerField('no', label('no'), {}),
  quantity: new DecimalField('quantity', label('quantity'), {}),
  block: new RelationToOneField('block', label('block'), {}),
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
  week: new RelationToOneField('week', label('week'), {}),
  year: new IntegerField('year', label('year'), {}),
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
  noRange: new IntegerRangeField(
    'noRange',
    label('noRange'),
  ),
  quantityRange: new DecimalRangeField(
    'quantityRange',
    label('quantityRange'),
  ),
  yearRange: new IntegerRangeField(
    'yearRange',
    label('yearRange'),
  ),
};

export default {
  fields,
};
