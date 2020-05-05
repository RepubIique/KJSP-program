import model from 'modules/workDone/workDoneModel';

const { fields } = model;

export default [
  fields.id,
  fields.workerID,
  fields.workcode,
  fields.quantity,
  fields.block,
  fields.month,
  fields.week,
  fields.year,
  fields.createdAt,
  fields.updatedAt
];
