module.exports = (app) => {
  app.post(`/designation`, require('./designationCreate'));
  app.put(`/designation/:id`, require('./designationUpdate'));
  app.post(`/designation/import`, require('./designationImport'));
  app.delete(`/designation`, require('./designationDestroy'));
  app.get(
    `/designation/autocomplete`,
    require('./designationAutocomplete'),
  );
  app.get(`/designation`, require('./designationList'));
  app.get(`/designation/:id`, require('./designationFind'));
};
