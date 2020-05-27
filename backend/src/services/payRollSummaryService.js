// so .. we need an instance of sequelize, not just...  const sequelize = require('sequelize')
// this below seems to be working ...
const sequelize = require('../database/models').sequelize;

/**
 * Handles payRollSummary operations
 */
module.exports = class payRollSummaryService {
    async findAndCountAll(args) {
        console.log('--------- Pay Roll Summary Service --------')
        return sequelize.query(
            'SELECT * from PayRollSummary',
          );
      }
}