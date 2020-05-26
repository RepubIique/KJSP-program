module.exports = (app) => {

    app.get(`/workerWorkDoneSummary`, require('./workerWorkDoneSummaryList'));

  };
  