module.exports = (app) => {
  app.post(`/uom`, require('./uomCreate'));
  app.put(`/uom/:id`, require('./uomUpdate'));
  app.post(`/uom/import`, require('./uomImport'));
  app.delete(`/uom`, require('./uomDestroy'));
  app.get(
    `/uom/autocomplete`,
    require('./uomAutocomplete'),
  );
  app.get(`/uom`, require('./uomList'));
  app.get(`/uom/:id`, require('./uomFind'));
};
