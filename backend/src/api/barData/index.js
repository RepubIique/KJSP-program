module.exports = (app) => {

    app.get(`/barData`, require('./barDataList'));

  };
  