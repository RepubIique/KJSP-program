import model from 'modules/deduction/deductionModel';

const { fields } = model;

export default [
  fields.id,
  fields.workersID,
  fields.deductfor,
  fields.bfrm,
  fields.currentRM,
  fields.deductionRM,
  fields.cfrm,
  fields.month,
  fields.year,
  fields.createdAt,
  fields.updatedAt
];
