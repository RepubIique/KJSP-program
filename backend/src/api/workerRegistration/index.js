module.exports = (app) => {
  app.post(`/worker-registration`, require('./workerRegistrationCreate'));
  app.put(`/worker-registration/:id`, require('./workerRegistrationUpdate'));
  app.post(`/worker-registration/import`, require('./workerRegistrationImport'));
  app.delete(`/worker-registration`, require('./workerRegistrationDestroy'));
  app.get(
    `/worker-registration/autocomplete`,
    require('./workerRegistrationAutocomplete'),
  );
  app.get(`/worker-registration`, require('./workerRegistrationList'));
  app.get(`/worker-registration/:id`, require('./workerRegistrationFind'));
};
