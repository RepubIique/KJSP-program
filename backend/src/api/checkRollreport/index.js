module.exports = (app) => {

    app.get(`/checkRollreport`, require('./checkRollreportList'));

  };
  