module.exports = (app) => {

    app.get(`/monthlyLabourCost`, require('./monthlyLabourCostList'));

  };
  