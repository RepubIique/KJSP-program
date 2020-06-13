module.exports = (app) => {
  app.get(`/deductionPayslip`, require('./deductionPayslipList'));
};
