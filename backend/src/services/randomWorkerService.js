// so .. we need an instance of sequelize, not just...  const sequelize = require('sequelize')
// this below seems to be working ...
const sequelize = require('../database/models').sequelize;

/**
 * Handles randomWorker operations
 */
module.exports = class randomWorkerService {
    async findAndCountAll(args) {
        console.log('--------- randomWorker Service --------')
        return sequelize.query(
            'SELECT * from randomWorker',
          );
      }
}