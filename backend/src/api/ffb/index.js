module.exports = (app) => {
  app.post(`/ffb`, require('./ffbCreate'));
  app.put(`/ffb/:id`, require('./ffbUpdate'));
  app.post(`/ffb/import`, require('./ffbImport'));
  app.delete(`/ffb`, require('./ffbDestroy'));
  app.get(
    `/ffb/autocomplete`,
    require('./ffbAutocomplete'),
  );
  app.get(`/ffb`, require('./ffbList'));
  app.get(`/ffb/:id`, require('./ffbFind'));
};
