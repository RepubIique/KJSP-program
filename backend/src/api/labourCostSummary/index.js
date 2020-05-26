module.exports = (app) => {

    app.get(`/labourCostSummary`, require('./labourCostSummaryList'));

  };
  