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
  return i18n(`entities.attendance.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.attendance.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  subDivision: new RelationToOneField('subDivision', label('subDivision'), {}),
  week: new RelationToOneField('week', label('week'), {}),
  workerID: new RelationToOneField('workerID', label('workerID'), {}),
  totalWorkingDay: new IntegerField('totalWorkingDay', label('totalWorkingDay'), {}),
  totalWorkingHours: new IntegerField('totalWorkingHours', label('totalWorkingHours'), {}),
  totalRestDay: new IntegerField('totalRestDay', label('totalRestDay'), {}),
  totalPublicHoliday: new IntegerField('totalPublicHoliday', label('totalPublicHoliday'), {}),
  totalAbsent: new IntegerField('totalAbsent', label('totalAbsent'), {}),
  totalSickLeave: new IntegerField('totalSickLeave', label('totalSickLeave'), {}),
  totalOnLeave: new DecimalField('totalOnLeave', label('totalOnLeave'), {}),
  totalOvertimeHour: new DecimalField('totalOvertimeHour', label('totalOvertimeHour'), {}),
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
  totalWorkingDayRange: new IntegerRangeField(
    'totalWorkingDayRange',
    label('totalWorkingDayRange'),
  ),
  totalWorkingHoursRange: new IntegerRangeField(
    'totalWorkingHoursRange',
    label('totalWorkingHoursRange'),
  ),
  totalRestDayRange: new IntegerRangeField(
    'totalRestDayRange',
    label('totalRestDayRange'),
  ),
  totalPublicHolidayRange: new IntegerRangeField(
    'totalPublicHolidayRange',
    label('totalPublicHolidayRange'),
  ),
  totalAbsentRange: new IntegerRangeField(
    'totalAbsentRange',
    label('totalAbsentRange'),
  ),
  totalSickLeaveRange: new IntegerRangeField(
    'totalSickLeaveRange',
    label('totalSickLeaveRange'),
  ),
  totalOnLeaveRange: new DecimalRangeField(
    'totalOnLeaveRange',
    label('totalOnLeaveRange'),
  ),
  totalOvertimeHourRange: new DecimalRangeField(
    'totalOvertimeHourRange',
    label('totalOvertimeHourRange'),
  ),
  yearRange: new IntegerRangeField(
    'yearRange',
    label('yearRange'),
  ),
};

export default {
  fields,
};
