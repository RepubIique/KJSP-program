module.exports = (app) => {

    app.get(`/workerNameList`, require('./workerNameListList'));

  };
  