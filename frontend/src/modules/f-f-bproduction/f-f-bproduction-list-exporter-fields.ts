import { FFBproductionModel } from '@/modules/f-f-bproduction/f-f-bproduction-model';

const { fields } = FFBproductionModel;

export default [
  fields.id,
  fields.date,
  fields.location,
  fields.mill,
  fields.block,
  fields.bunches,
  fields.mt,
  fields.looseFruit,
  fields.bunchWeight,
  fields.createdAt,
  fields.updatedAt
];
