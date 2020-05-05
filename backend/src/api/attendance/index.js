module.exports = (app) => {
  app.post(`/attendance`, require('./attendanceCreate'));
  app.put(`/attendance/:id`, require('./attendanceUpdate'));
  app.post(`/attendance/import`, require('./attendanceImport'));
  app.delete(`/attendance`, require('./attendanceDestroy'));
  app.get(
    `/attendance/autocomplete`,
    require('./attendanceAutocomplete'),
  );
  app.get(`/attendance`, require('./attendanceList'));
  app.get(`/attendance/:id`, require('./attendanceFind'));
};
