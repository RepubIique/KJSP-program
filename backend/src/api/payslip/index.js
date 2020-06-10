module.exports = (app) => {
  app.get(`/payslip`, require('./payslipList'));
};
