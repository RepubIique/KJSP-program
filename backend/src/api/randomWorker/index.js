module.exports = (app) => {

    app.get(`/randomWorker`, require('./randomWorkerList'));

  };
  