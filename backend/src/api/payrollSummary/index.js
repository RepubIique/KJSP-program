module.exports = (app) => {

    app.get(`/PayRollSummary`, require('./PayRollSummaryList'));

  };
  