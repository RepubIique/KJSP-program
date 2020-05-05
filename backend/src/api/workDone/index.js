module.exports = (app) => {
  app.post(`/work-done`, require('./workDoneCreate'));
  app.put(`/work-done/:id`, require('./workDoneUpdate'));
  app.post(`/work-done/import`, require('./workDoneImport'));
  app.delete(`/work-done`, require('./workDoneDestroy'));
  app.get(
    `/work-done/autocomplete`,
    require('./workDoneAutocomplete'),
  );
  app.get(`/work-done`, require('./workDoneList'));
  app.get(`/work-done/:id`, require('./workDoneFind'));
};
