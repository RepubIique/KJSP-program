module.exports = (app) => {
  app.post(`/blocks`, require('./blocksCreate'));
  app.put(`/blocks/:id`, require('./blocksUpdate'));
  app.post(`/blocks/import`, require('./blocksImport'));
  app.delete(`/blocks`, require('./blocksDestroy'));
  app.get(
    `/blocks/autocomplete`,
    require('./blocksAutocomplete'),
  );
  app.get(`/blocks`, require('./blocksList'));
  app.get(`/blocks/:id`, require('./blocksFind'));
};
