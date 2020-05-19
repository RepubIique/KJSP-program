import model from 'modules/checkroll/checkrollModel';

const { fields } = model;

export default [
  fields.id,
  fields.workerID,
  fields.workcode,
  fields.no,
  fields.quantity,
  fields.block,
  fields.month,
  fields.week,
  fields.year,
  fields.createdAt,
  fields.updatedAt
];
