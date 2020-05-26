module.exports = (app) => {

    app.get(`/monthlyLaborCost`, require('./monthlyLaborCostList'));

  };
  