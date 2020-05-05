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
import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.deduction.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.deduction.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  workersID: new RelationToOneField('workersID', label('workersID'), {}),
  deductfor: new StringField('deductfor', label('deductfor'), {}),
  bfrm: new DecimalField('bfrm', label('bfrm'), {}),
  currentRM: new DecimalField('currentRM', label('currentRM'), {}),
  deductionRM: new DecimalField('deductionRM', label('deductionRM'), {}),
  cfrm: new DecimalField('cfrm', label('cfrm'), {}),
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
  bfrmRange: new DecimalRangeField(
    'bfrmRange',
    label('bfrmRange'),
  ),
  currentRMRange: new DecimalRangeField(
    'currentRMRange',
    label('currentRMRange'),
  ),
  deductionRMRange: new DecimalRangeField(
    'deductionRMRange',
    label('deductionRMRange'),
  ),
  cfrmRange: new DecimalRangeField(
    'cfrmRange',
    label('cfrmRange'),
  ),
  yearRange: new IntegerRangeField(
    'yearRange',
    label('yearRange'),
  ),
};

export default {
  fields,
};
