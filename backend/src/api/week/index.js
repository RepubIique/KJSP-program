module.exports = (app) => {
  app.post(`/week`, require('./weekCreate'));
  app.put(`/week/:id`, require('./weekUpdate'));
  app.post(`/week/import`, require('./weekImport'));
  app.delete(`/week`, require('./weekDestroy'));
  app.get(
    `/week/autocomplete`,
    require('./weekAutocomplete'),
  );
  app.get(`/week`, require('./weekList'));
  app.get(`/week/:id`, require('./weekFind'));
};
