import { WorkDoneModel } from '@/modules/work-done/work-done-model';

const { fields } = WorkDoneModel;

export default [
  fields.id,
  fields.location,
  fields.date,
  fields.worker,
  fields.block,
  fields.quantity,
  fields.remarks,
  fields.amount,
  fields.createdAt,
  fields.updatedAt
];
