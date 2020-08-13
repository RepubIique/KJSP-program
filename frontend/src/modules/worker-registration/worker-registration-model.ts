import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { LocationField } from '@/modules/location/location-field';
import ImagesField from '@/shared/fields/images-field';
import Storage from '@/security/storage';

function label(name) {
  return i18n(`entities.workerRegistration.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.workerRegistration.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "required": true
  }),
  designation: new StringField('designation', label('designation'), {}),
  passport: new StringField('passport', label('passport'), {}),
  permitExpiryDate: new DateField('permitExpiryDate', label('permitExpiryDate'), {}),
  dateEmployed: new DateField('dateEmployed', label('dateEmployed'), {}),
  gang: new StringField('gang', label('gang'), {}),
  superiorName: new StringField('superiorName', label('superiorName'), {}),
  dob: new DateField('dob', label('dob'), {}),
  age: new IntegerField('age', label('age'), {}),
  gender: new EnumeratorField('gender', label('gender'), [
    { id: 'Male', label: enumeratorLabel('gender', 'Male') },
    { id: 'Female', label: enumeratorLabel('gender', 'Female') },
    { id: 'Other', label: enumeratorLabel('gender', 'Other') },
  ],{}),
  placeOfBirth: new StringField('placeOfBirth', label('placeOfBirth'), {}),
  nationality: new StringField('nationality', label('nationality'), {}),
  religion: new StringField('religion', label('religion'), {}),
  race: new StringField('race', label('race'), {}),
  maritalStatus: new EnumeratorField('maritalStatus', label('maritalStatus'), [
    { id: 'Married', label: enumeratorLabel('maritalStatus', 'Married') },
    { id: 'Divorced', label: enumeratorLabel('maritalStatus', 'Divorced') },
    { id: 'Single', label: enumeratorLabel('maritalStatus', 'Single') },
    { id: 'Other', label: enumeratorLabel('maritalStatus', 'Other') },
  ],{}),
  spouse: new StringField('spouse', label('spouse'), {}),
  children: new IntegerField('children', label('children'), {}),
  bank: new StringField('bank', label('bank'), {}),
  bankNo: new StringField('bankNo', label('bankNo'), {}),
  socso: new StringField('socso', label('socso'), {}),
  location: LocationField.relationToOne('location', label('location'), {}),
  status: new EnumeratorField('status', label('status'), [
    { id: 'Active', label: enumeratorLabel('status', 'Active') },
    { id: 'On Leave', label: enumeratorLabel('status', 'On Leave') },
    { id: 'Resigned', label: enumeratorLabel('status', 'Resigned') },
    { id: 'Absconded', label: enumeratorLabel('status', 'Absconded') },
  ],{}),
  image: new ImagesField('image', label('image'), Storage.values.workerRegistrationImage, {}),
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
  permitExpiryDateRange: new DateRangeField(
    'permitExpiryDateRange',
    label('permitExpiryDateRange'),
  ),
  dateEmployedRange: new DateRangeField(
    'dateEmployedRange',
    label('dateEmployedRange'),
  ),
  dobRange: new DateRangeField(
    'dobRange',
    label('dobRange'),
  ),
  ageRange: new IntegerRangeField(
    'ageRange',
    label('ageRange'),
  ),
  childrenRange: new IntegerRangeField(
    'childrenRange',
    label('childrenRange'),
  ),
};

export class WorkerRegistrationModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
