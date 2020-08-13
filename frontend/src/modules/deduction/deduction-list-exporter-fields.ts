import { DeductionModel } from '@/modules/deduction/deduction-model';

const { fields } = DeductionModel;

export default [
  fields.id,
  fields.worker,
  fields.bf,
  fields.credit,
  fields.deduction,
  fields.cf,
  fields.date,
  fields.location,
  fields.createdAt,
  fields.updatedAt
];
