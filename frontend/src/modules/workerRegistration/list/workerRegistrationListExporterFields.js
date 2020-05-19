import model from 'modules/workerRegistration/workerRegistrationModel';

const { fields } = model;

export default [
  fields.id,
  fields.workerID,
  fields.workerName,
  fields.designation,
  fields.passportICNo,
  fields.passportExpireddate,
  fields.dateofEmployment,
  fields.superiorName,
  fields.dateofBirth,
  fields.age,
  fields.gender,
  fields.placeofBirth,
  fields.nationality,
  fields.religion,
  fields.race,
  fields.maritalStatus,
  fields.spouseName,
  fields.noofchild,
  fields.bank,
  fields.bankAccountNo,
  fields.socsoNo,
  fields.subdivision,
  fields.image,
  fields.createdAt,
  fields.updatedAt
];
