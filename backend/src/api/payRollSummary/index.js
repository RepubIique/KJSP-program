module.exports = (app) => {

    app.get(`/payRollSummary`, require('./payRollSummaryList'));

  };
  