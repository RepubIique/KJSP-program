module.exports = (app) => {
  app.post(`/subdivision`, require('./subdivisionCreate'));
  app.put(`/subdivision/:id`, require('./subdivisionUpdate'));
  app.post(`/subdivision/import`, require('./subdivisionImport'));
  app.delete(`/subdivision`, require('./subdivisionDestroy'));
  app.get(
    `/subdivision/autocomplete`,
    require('./subdivisionAutocomplete'),
  );
  app.get(`/subdivision`, require('./subdivisionList'));
  app.get(`/subdivision/:id`, require('./subdivisionFind'));
};
