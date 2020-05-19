import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import IntegerField from 'modules/shared/fields/integerField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import DateField from 'modules/shared/fields/dateField';
import DateRangeField from 'modules/shared/fields/dateRangeField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.workerRegistration.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.workerRegistration.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  workerID: new StringField('workerID', label('workerID'), {}),
  workerName: new StringField('workerName', label('workerName'), {}),
  designation: new RelationToOneField('designation', label('designation'), {}),
  passportICNo: new StringField('passportICNo', label('passportICNo'), {}),
  passportExpireddate: new DateField('passportExpireddate', label('passportExpireddate'), {}),
  dateofEmployment: new DateField('dateofEmployment', label('dateofEmployment'), {}),
  superiorName: new StringField('superiorName', label('superiorName'), {}),
  dateofBirth: new DateField('dateofBirth', label('dateofBirth'), {}),
  age: new IntegerField('age', label('age'), {}),
  gender: new EnumeratorField('gender', label('gender'), [
    { id: 'Male', label: enumeratorLabel('gender', 'Male') },
    { id: 'Female', label: enumeratorLabel('gender', 'Female') },
    { id: 'Other', label: enumeratorLabel('gender', 'Other') },
  ],{}),
  placeofBirth: new StringField('placeofBirth', label('placeofBirth'), {}),
  nationality: new StringField('nationality', label('nationality'), {}),
  religion: new StringField('religion', label('religion'), {}),
  race: new StringField('race', label('race'), {}),
  maritalStatus: new EnumeratorField('maritalStatus', label('maritalStatus'), [
    { id: 'Married', label: enumeratorLabel('maritalStatus', 'Married') },
    { id: 'Divorced', label: enumeratorLabel('maritalStatus', 'Divorced') },
    { id: 'Single', label: enumeratorLabel('maritalStatus', 'Single') },
  ],{}),
  spouseName: new StringField('spouseName', label('spouseName'), {}),
  noofchild: new IntegerField('noofchild', label('noofchild'), {}),
  bank: new StringField('bank', label('bank'), {}),
  bankAccountNo: new IntegerField('bankAccountNo', label('bankAccountNo'), {}),
  socsoNo: new IntegerField('socsoNo', label('socsoNo'), {}),
  subdivision: new RelationToOneField('subdivision', label('subdivision'), {}),
  image: new ImagesField('image', label('image'), 'workerRegistration/image',{
    "size": 50000000
  }),
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
  passportExpireddateRange: new DateRangeField(
    'passportExpireddateRange',
    label('passportExpireddateRange'),
  ),
  dateofEmploymentRange: new DateRangeField(
    'dateofEmploymentRange',
    label('dateofEmploymentRange'),
  ),
  dateofBirthRange: new DateRangeField(
    'dateofBirthRange',
    label('dateofBirthRange'),
  ),
  ageRange: new IntegerRangeField(
    'ageRange',
    label('ageRange'),
  ),
  noofchildRange: new IntegerRangeField(
    'noofchildRange',
    label('noofchildRange'),
  ),
  bankAccountNoRange: new IntegerRangeField(
    'bankAccountNoRange',
    label('bankAccountNoRange'),
  ),
  socsoNoRange: new IntegerRangeField(
    'socsoNoRange',
    label('socsoNoRange'),
  ),
};

export default {
  fields,
};
