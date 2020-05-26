// so .. we need an instance of sequelize, not just...  const sequelize = require('sequelize')
// this below seems to be working ...
const sequelize = require('../database/models').sequelize;

/**
 * Handles PayRollSummary operations
 */
module.exports = class PayRollSummaryService {
    async findAndCountAll(args) {
        console.log('------------------------')
        return sequelize.query(
            'SELECT * from PayRollSummary',
          );
      }
}