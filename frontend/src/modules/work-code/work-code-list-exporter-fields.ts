import { WorkCodeModel } from '@/modules/work-code/work-code-model';

const { fields } = WorkCodeModel;

export default [
  fields.id,
  fields.category,
  fields.type,
  fields.description,
  fields.uom,
  fields.rate,
  fields.remarks,
  fields.createdAt,
  fields.updatedAt
];
