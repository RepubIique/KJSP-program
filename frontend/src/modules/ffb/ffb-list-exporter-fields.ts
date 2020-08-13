import { FfbModel } from '@/modules/ffb/ffb-model';

const { fields } = FfbModel;

export default [
  fields.id,
  fields.location,
  fields.block,
  fields.budget,
  fields.date,
  fields.createdAt,
  fields.updatedAt
];
