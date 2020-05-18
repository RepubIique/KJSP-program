module.exports = (app) => {
  app.get(`/payrollsum`, require('./payrollsumList'));
  app.get(`/payrollsum/:id`, require('./payrollsumFind'));
};
