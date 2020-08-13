import { WorkerRegistrationModel } from '@/modules/worker-registration/worker-registration-model';

const { fields } = WorkerRegistrationModel;

export default [
  fields.name,
  fields.designation,
  fields.passport,
  fields.permitExpiryDate,
  fields.dateEmployed,
  fields.gang,
  fields.superiorName,
  fields.dob,
  fields.age,
  fields.gender,
  fields.placeOfBirth,
  fields.nationality,
  fields.religion,
  fields.race,
  fields.maritalStatus,
  fields.spouse,
  fields.children,
  fields.bank,
  fields.bankNo,
  fields.socso,
  fields.location,
  fields.status,
  fields.image,
];
