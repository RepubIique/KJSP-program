import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { LocationField } from '@/modules/location/location-field';
import { WorkerRegistrationField } from '@/modules/worker-registration/worker-registration-field';

function label(name) {
  return i18n(`entities.attendance.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.attendance.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  location: LocationField.relationToOne('location', label('location'), {}),
  date: new DateField('date', label('date'), {}),
  worker: WorkerRegistrationField.relationToOne('worker', label('worker'), {}),
  type: new EnumeratorField('type', label('type'), [
    { id: 'Working day', label: enumeratorLabel('type', 'Working day') },
    { id: 'rest day', label: enumeratorLabel('type', 'rest day') },
    { id: 'public holiday', label: enumeratorLabel('type', 'public holiday') },
    { id: 'Absent', label: enumeratorLabel('type', 'Absent') },
    { id: 'Sick Leave', label: enumeratorLabel('type', 'Sick Leave') },
    { id: 'On leave', label: enumeratorLabel('type', 'On leave') },
  ],{}),
  hours: new DecimalField('hours', label('hours'), {}),
  totalHours: new DecimalField('totalHours', label('totalHours'), {}),
  overTime: new DecimalField('overTime', label('overTime'), {}),
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
  hoursRange: new DecimalRangeField(
    'hoursRange',
    label('hoursRange'),
  ),
  totalHoursRange: new DecimalRangeField(
    'totalHoursRange',
    label('totalHoursRange'),
  ),
  overTimeRange: new DecimalRangeField(
    'overTimeRange',
    label('overTimeRange'),
  ),
};

export class AttendanceModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
