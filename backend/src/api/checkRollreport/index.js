module.exports = (app) => {

    app.get(`/checkRollReport`, require('./checkRollReportList'));

  };
  