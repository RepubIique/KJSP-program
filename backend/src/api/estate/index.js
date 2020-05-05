module.exports = (app) => {
  app.post(`/estate`, require('./estateCreate'));
  app.put(`/estate/:id`, require('./estateUpdate'));
  app.post(`/estate/import`, require('./estateImport'));
  app.delete(`/estate`, require('./estateDestroy'));
  app.get(
    `/estate/autocomplete`,
    require('./estateAutocomplete'),
  );
  app.get(`/estate`, require('./estateList'));
  app.get(`/estate/:id`, require('./estateFind'));
};
