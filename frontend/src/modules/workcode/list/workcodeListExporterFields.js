import model from 'modules/workcode/workcodeModel';

const { fields } = model;

export default [
  fields.id,
  fields.accCode,
  fields.workCategory,
  fields.typeofWork,
  fields.workDescription,
  fields.rate,
  fields.createdAt,
  fields.updatedAt
];
