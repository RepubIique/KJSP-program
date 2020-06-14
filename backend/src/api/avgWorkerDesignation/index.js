module.exports = (app) => {

    app.get(`/avgWorkerDesignation`, require('./avgWorkerDesignationList'));

  };
  