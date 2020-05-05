module.exports = (app) => {
  app.post(`/checkroll`, require('./checkrollCreate'));
  app.put(`/checkroll/:id`, require('./checkrollUpdate'));
  app.post(`/checkroll/import`, require('./checkrollImport'));
  app.delete(`/checkroll`, require('./checkrollDestroy'));
  app.get(
    `/checkroll/autocomplete`,
    require('./checkrollAutocomplete'),
  );
  app.get(`/checkroll`, require('./checkrollList'));
  app.get(`/checkroll/:id`, require('./checkrollFind'));
};
