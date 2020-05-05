module.exports = (app) => {
  app.post(`/workcode`, require('./workcodeCreate'));
  app.put(`/workcode/:id`, require('./workcodeUpdate'));
  app.post(`/workcode/import`, require('./workcodeImport'));
  app.delete(`/workcode`, require('./workcodeDestroy'));
  app.get(
    `/workcode/autocomplete`,
    require('./workcodeAutocomplete'),
  );
  app.get(`/workcode`, require('./workcodeList'));
  app.get(`/workcode/:id`, require('./workcodeFind'));
};
