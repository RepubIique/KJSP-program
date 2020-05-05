module.exports = (app) => {
  app.post(`/mill`, require('./millCreate'));
  app.put(`/mill/:id`, require('./millUpdate'));
  app.post(`/mill/import`, require('./millImport'));
  app.delete(`/mill`, require('./millDestroy'));
  app.get(
    `/mill/autocomplete`,
    require('./millAutocomplete'),
  );
  app.get(`/mill`, require('./millList'));
  app.get(`/mill/:id`, require('./millFind'));
};
