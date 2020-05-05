module.exports = (app) => {
  app.post(`/deduction`, require('./deductionCreate'));
  app.put(`/deduction/:id`, require('./deductionUpdate'));
  app.post(`/deduction/import`, require('./deductionImport'));
  app.delete(`/deduction`, require('./deductionDestroy'));
  app.get(
    `/deduction/autocomplete`,
    require('./deductionAutocomplete'),
  );
  app.get(`/deduction`, require('./deductionList'));
  app.get(`/deduction/:id`, require('./deductionFind'));
};
